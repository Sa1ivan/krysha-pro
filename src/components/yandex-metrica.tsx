"use client";

import { useEffect } from "react";
import Script from "next/script";

const METRICA_COUNTER_ID = 112883390;

type MetricaGoal = "phone_click" | "whatsapp_click" | "avito_click";

declare global {
  interface Window {
    ym?: (counterId: number, method: "reachGoal", goal: MetricaGoal) => void;
  }
}

export function YandexMetrica() {
  useEffect(() => {
    function trackGoal(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const goal = target.closest<HTMLElement>("[data-metrica-goal]")?.dataset.metricaGoal;

      if (goal === "phone_click" || goal === "whatsapp_click" || goal === "avito_click") {
        window.ym?.(METRICA_COUNTER_ID, "reachGoal", goal);
      }
    }

    document.addEventListener("click", trackGoal);

    return () => document.removeEventListener("click", trackGoal);
  }, []);

  return (
    <>
      <Script id="yandex-metrica" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${METRICA_COUNTER_ID}', 'ym');
          ym(${METRICA_COUNTER_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
        `}
      </Script>
      <noscript>
        <div>
          <img alt="" src={`https://mc.yandex.ru/watch/${METRICA_COUNTER_ID}`} style={{ left: "-9999px", position: "absolute" }} />
        </div>
      </noscript>
    </>
  );
}
