document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation
  const navButtons = document.querySelectorAll('.nav-button');
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Generate Height Lines
  const heightLinesContainer = document.querySelector('.height-lines-container');
  if (heightLinesContainer) {
    const heights = [177, 177, 172, 172, 168, 168, 164, 164, 160, 160, 156, 156, 152, 152, 148, 148, 144, 144, 140, 140, 136, 136, 132, 132, 128, 128, 124, 124, 120, 120, 116, 116];
    
    heights.forEach(height => {
      const line = document.createElement('div');
      line.className = 'height-line';
      line.innerHTML = `<p>${height}</p>`;
      heightLinesContainer.appendChild(line);
    });
  }

  // Generate Ticker Content
  const crimeZoneTickers = document.querySelectorAll('.ticker-content.crime-zone');
  crimeZoneTickers.forEach(ticker => {
    const content = 'CRIME ZONE + CRIME ZONE + CRIME ZONE + CRIME ZONE + CRIME ZONE + ';
    ticker.innerHTML = content.repeat(12); // Repeat enough to cover the screen and animate smoothly
  });

  const pettyCasesTickers = document.querySelectorAll('.ticker-content.petty-cases');
  pettyCasesTickers.forEach(ticker => {
    const content = 'PETTY CASES + PETTY CASES + PETTY CASES + PETTY CASES + PETTY CASES + ';
    ticker.innerHTML = content.repeat(12);
  });
});
