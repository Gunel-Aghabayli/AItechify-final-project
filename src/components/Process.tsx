import React from "react";

const TICKER_TEXT =
  "Artificial Intelligence // The impact of AI on the evolution of future technologies // ";

const Process = () => {
  return (
    <section className="total-process">
      <div className="ticker">
        <div className="ticker-row ticker-row--image">
          <div className="ticker-row__inner">
            <div className="ticker-track">
              <span className="ticker-text">{TICKER_TEXT.repeat(6)}</span>
              <span className="ticker-text" aria-hidden>
                {TICKER_TEXT.repeat(6)}
              </span>
            </div>
          </div>
        </div>
        <div className="ticker-row ticker-row--gradient">
          <div className="ticker-row__inner">
            <div className="ticker-track">
              <span className="ticker-text">{TICKER_TEXT.repeat(6)}</span>
              <span className="ticker-text" aria-hidden>
                {TICKER_TEXT.repeat(6)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="process"></section>
    </section>
  );
};

export default Process;
