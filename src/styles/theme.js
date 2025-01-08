class Theme {
    constructor() {}
    fonts = {
        face:{
            principal: 'Roboto, sans-serif',
            titles: 'Rationale, sans-serif',
            emphasis: 'Montserrat, sans-serif'
        },
        size:{ 
            desktop: {
                paragraph: '1.6rem',
                emphasis: '3.2rem',
                titles: '3.6rem',
                subTitle: '2.4rem',
                navLink: '1.6rem'
            },
            mobile: {
                paragraph: '1.4rem',
                emphasis: '2.4rem',
                titles: '2.4rem',
                subTitle: '2rem',
                navLink: '1.6rem'
            }
        }
        }
    };

const darkMode = new Theme();

darkMode.colors = {
        mainBackgroundColor: '#36374b',
        mainElementColor: '#4B5162',
        emphasisElementColor: '#6B728E',
        elementHoverColor: '#929AAB',
        callToActionColor: '#E84A5F',
        fontDefaultColor: '#FFFFFF'
    };

const lightMode = new Theme();


lightMode.colors = {
        mainBackgroundColor: '#FFFFFF',
        mainElementColor: '#F2F2F2',
        emphasisElementColor: '#E0E0E0',
        elementHoverColor: '#C8C8C8',
        callToActionColor: '#E84A5F',
        fontDefaultColor: '#333333'
    };

export const theme = {
    darkMode,
    lightMode
};