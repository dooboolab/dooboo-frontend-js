import { css } from 'styled-components';

export const theme = {
  mainColor: '#3498db',
  dangerColor: '#e74c3c',
  successColor: '#2ecc71',
};

const sizes = {
  mobile: 768,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
