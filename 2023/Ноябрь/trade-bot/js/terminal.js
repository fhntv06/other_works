// Sorce on video
// From code is video - https://www.youtube.com/watch?v=wX20wYozHKc
const options = {
  childList: true,
  attribues: true,
  subtree: true
};

const priceOptions = {
  attributes: true
};

let buttonBuy = null;
let buttonSell = null;

let loaded = false;

let currentValue = 0;
let movement = '';

let up = 0;
let down = 0;

let previousMovementDirection = '';
let summaryMovement = 0;
let maximumMovement = 0;
let maximumSummaryMovement = 0;


const priceObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    const newValue = parseFloat(mutation.target.innerHTML.replace(' ₽', '').replace(',', '.'));

    if (currentValue !== newValue) {

      let same = false;
      if (currentValue !== newValue) {
        if (currentValue !== 0 && currentValue > newValue) {
          movement = "🔽";
          down++;
          same = isSomeDirectionMovement(movement, previousMovementDirection);
          previousMovementDirection = 'down';
        } else{
          movement = '🔼';
          up++;
          same = isSomeDirectionMovement(movement, previousMovementDirection);
          previousMovementDirection = 'up';
        }
      }

      const difference = newValue - currentValue;
      if (same) {
        summaryMovement = summaryMovement + Math.abs(difference);
        if (summaryMovement > maximumSummaryMovement) {
          maximumSummaryMovement = summaryMovement;
        }
      } else {
        summaryMovement = 0;
      }

      if (Math.abs(difference) > maximumMovement || maximumMovement > 60) {
        maximumMovement = Math.abs(difference);
      }

      currentValue = newValue;

      const buyValue = localStorage.getItem('buyValue') ? parseFloat(localStorage.getItem('buyValue')) : 0.2;

      if (
        (summaryMovement.toFixed(4) >= buyValue || maximumMovement.toFixed(4) >= buyValue) 
        && previousMovementDirection === "down"
      ) {
        console.log('Покупка!' + currentValue.toFixed(4));
        // buy();
        maximumMovement = 0;
        new Notification("Покупка за " + currentValue, {
          body: "Куплено",
          silent: false,
        });
      }

      console.log(movement + " " + currentValue);

      if (up >= 10 || down >= 10) {
        up = 0;
        down = 0;
      }
    }
  });
});

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    const price = document.querySelector("div[class*='src-containers-Animated-styles-clickable-rdRel src-containers-Animated-styles-defaultHighlighted-COVpG']");

    if (price && !loaded) {
      console.log("Let's go!");
      buttonBuy = document.querySelector('.pro-button.pro-fill.pro-intent-success');
      buttonSell = document.querySelector('.pro-button.pro-fill.pro-intent-danger');

      if (buttonBuy && buttonSell) {
        console.log(price.innerHTML);
        loaded = true;
        observer.disconnect();
        priceObserver.observe(price, priceOptions);
        drawPanel();
      }
    }
  });
});

observer.observe(document.body, options);


setTimeout(() => {
  window.location.reload();
}, 1000 * 60 * 15);

function isSomeDirectionMovement(movement, previousMovementDirection) {
  if (movement === "🔽" && previousMovementDirection === 'down') {
    return true; 
  }
  if (movement === "🔼" && previousMovementDirection === 'up') {
    return true; 
  }

  return false;
};

function sell() {
  buttonBuy.click();
  localStorage.setItem('canSell', 'false');
}

function buy() {
  buttonBuy.click();
  localStorage.setItem('canBuy', 'false');
  document.querySelector('input.buy').removeAttribute('checked');

}

function drawPanel() {
  if (document.querySelector('#root .panel')) {
    return;
  }
  const panel = document.createElement("DIV");
  panel.setAttribute('class', 'panel');
  document.querySelector('#root').appendChild(panel);
  drawBuyManagement(panel);
  drawSellManagement(panel);
  drawAmountInput(panel)
}

function drawBuyManagement(panel) {
  let canBuy = localStorage.getItem('canBuy');
  const label = document.createElement("label");
  label.setAttribute('class', 'management');

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('class', 'buy');

  const span = document.createElement("span");
  span.innerHTML = 'Можно покупать';

  panel.appendChild(label);
  panel.appendChild(input);
  panel.appendChild(span);

  if (canBuy === 'true') {
    input.setAttribute('checked', 'checked');
  }

  input.addEventListener('click', () => {
    canBuy ? input.setAttribute('checked', 'checked') : input.removeAttribute('checked');
    const newValue = canBuy === 'true' ? canBuy = false : canBuy = true;
    localStorage.setItem('canBuy', newValue);
  });
}

function drawSellManagement(panel) {
  let canBuy = localStorage.getItem('canBuy');
  const label = document.createElement("label");
  label.setAttribute('class', 'management');

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('class', 'sell');

  const span = document.createElement("span");
  span.innerHTML = 'Можно продавать';

  panel.appendChild(label);
  panel.appendChild(input);
  panel.appendChild(span);

  if (canBuy === 'true') {
    input.setAttribute('checked', 'checked');
  }

  input.addEventListener('click', () => {
    canBuy ? input.setAttribute('checked', 'checked') : input.removeAttribute('checked');
    const newValue = canBuy === 'true' ? canBuy = false : canBuy = true;
    localStorage.setItem('canBuy', newValue);
  });
}

function drawAmountInput (panel) {
  const label = document.querySelector('label');
  label.setAttribute('class', 'management');
  
  const input = document.createElement('input');
  input.setAttribute('type', 'number');

  input.setAttribute('min', '0.0025');
  input.setAttribute('value', localStorage.getItem('buyValue') ? parseFloat(localStorage.getItem('buyValue')) : "0.02");
  input.setAttribute('step', '0.0025');
  panel.appendChild(label);
  label.appendChild(input);
  
  
  input.addEventListener('change', (e) => {
    console.log(e.target.value);
    localStorage.setItem('buyValue', e.target.value);
  });
}

function drawValues() {
  const summary = document.createElement('div');
  summary.setAttribute('class', 'summary');
  summary.innerHTML = "Суммарно сейчас <span class='movement'></span>";

  const maxSummary = document.createElement('div');
  maxSummary.setAttribute('class', 'summary');
  maxSummary.innerHTML = "Максимально за сессию <span class='movement'></span>";

  const max = document.querySelector('div');
  max.setAttribute('class', 'maxSummary');
  max.innerHTML = "Максимальное движение <span class='movement'></span>";

  const historicalMax = document.querySelector('div');
  historicalMax.setAttribute('class', 'maxSummary');
  historicalMax.innerHTML = "Исторический максимум <span class='movement'>0</span> <button class='reset'></button>";

  panel.appendChild(summary);
  panel.appendChild(max);
  panel.appendChild(maxSummary);
  panel.appendChild(historicalMax);

  document.querySelector('button.reset').addEventListener('click', () => {
    localStorage.setItem('historicalMax', '0');
    document.querySelector('.historicalMax .movement').innerHTML = '0';
  });
}

function setMax(value) {
  document.querySelector('.max .movement').innerHTML = value;
  setHistoricalMax(value);
}
function setSummary(value) {
  document.querySelector('.summary .movement').innerHTML = value;
}
function setMaxSummary(value) {
  document.querySelector('.maxSummary .movement').innerHTML = value;
  setHistoricalMax(value);
}
function setHistoricalMax(value) {
  if (parseFloat(value) > 60) {
    return;
  }

  const current = localStorage.getItem('historicalMax');
  document.querySelector('.historicalMax .movement').innerHTML = current;

  if (current) {
    if (parseFloat(current) < parseFloat(value)) {
      localStorage.setItem('historicalMax', value);
      document.querySelector('.historicalMax .movement').innerHTML = value;
    }
  } else {
    localStorage.setItem('historicalMax', value);
    document.querySelector('.historicalMax .movement').innerHTML = value;
  }
}