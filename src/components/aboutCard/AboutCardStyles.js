export default (theme) => ({
    main: {
        width: '100%',
        height: '100%',
        overflow: 'auto',
        padding: '20px 10px',
        margin: '0px auto',
        background: '#348f50' /* fallback for old browsers */,
        background: 'linear-gradient(to right, #348f50, #56b4d3)',
    },
    typographyH1: {
        width: '90%',
        padding: '20px 10px',
        margin: '0px auto',
        marginTop: '30%',
        color: '#000',
        fontSize: '10rem',
        fontFamily: 'OpenSans',
        paddingBottom: '10px',
    },

    typographyBody1: {
        width: '90%',
        margin: '0px auto',
        fontSize: '2rem',
    },

    subTitle: {
        color: '#868e96 !important',
    },

    greetingMain: {
        display: 'flex',
        '>*': {
            flex: '1',
            marginBottom: '30px',
        },
    },

    buttonGreetingDiv: {
        display: 'flex',
        marginTop: '20px',
    },

    greetingText: {
        fontSize: '70px',
        lineHeight: '11',
        color: 'black !important',
    },

    greetingTextP: {
        fontSize: '30px',
        lineHeight: '40px',
    },

    greetingImageDiv: {
        img: {
            maxWidth: '100%',
            height: 'auto',
        },
    },
})
