import {TextStyle} from 'react-native';

const TYPOGRAPHY = {
    headings: {
        h1: { fontSize: 32, lineHeight: 37, fontWeight: '700' as TextStyle['fontWeight'] },
        h2: { fontSize: 28, lineHeight: 33, fontWeight: '700' as TextStyle['fontWeight'] },
        h3: { fontSize: 26, lineHeight: 29, fontWeight: '700' as TextStyle['fontWeight'] },
        h4: { fontSize: 23, lineHeight: 26, fontWeight: '700' as TextStyle['fontWeight'] },
        h5: { fontSize: 20, lineHeight: 23, fontWeight: '700' as TextStyle['fontWeight'] },
        h6: { fontSize: 18, lineHeight: 21, fontWeight: '700' as TextStyle['fontWeight'] },
        h7: { fontSize: 16, lineHeight: 18, fontWeight: '700' as TextStyle['fontWeight'] },
        h8: { fontSize: 14, lineHeight: 16, fontWeight: '700' as TextStyle['fontWeight'] },
        h9: { fontSize: 12, lineHeight: 15, fontWeight: '700' as TextStyle['fontWeight'] },
        h10: { fontSize: 11, lineHeight: 13, fontWeight: '700' as TextStyle['fontWeight'] },
    },
    body: {
        xLarge: { fontSize: 18, lineHeight: 21, fontWeight: '400' as TextStyle['fontWeight'] },
        large: { fontSize: 16, lineHeight: 18, fontWeight: '400' as TextStyle['fontWeight'] },
        medium: { fontSize: 14, lineHeight: 16, fontWeight: '400' as TextStyle['fontWeight'] },
        small: { fontSize: 12, lineHeight: 15, fontWeight: '400' as TextStyle['fontWeight'] },
        xSmall: { fontSize: 11, lineHeight: 13, fontWeight: '400' as TextStyle['fontWeight'] },
    },
};

export default TYPOGRAPHY;
