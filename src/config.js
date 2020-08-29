
const dev = {
    baseUrl: {
        url: 'https://5f4930a28e271c001650c75e.mockapi.io/api',
    },
};

const qa = {
    baseUrl: {
        url: 'https://5f4930a28e271c001650c75e.mockapi.io/api',
    },
};

const hm = {
    baseUrl: {
        url: 'https://5f4930a28e271c001650c75e.mockapi.io/api',
    },
};

const prod = {
    baseUrl: {
        url: 'https://5f4930a28e271c001650c75e.mockapi.io/api',
    },
};

let config = dev;

if (process.env.REACT_APP_STAGE === 'qa') {
    config = qa;
} else if (process.env.REACT_APP_STAGE === 'hm') {
    config = hm;
} else if (process.env.REACT_APP_STAGE === 'prod') {
    config = prod;
}


export default {
    TokenLifetime: '300',
    timeoutApi: 60000,
    ...config,
};
