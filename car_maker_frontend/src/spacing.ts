import { CSSProp, css } from 'styled-components';

const sizes = {
	'size-0': 0,        // 0px
	'size-0-25': .25,   // 4px
	'size-0-5': .5,     // 8px
	'size-1': 1,        // 16px
	'size-1-5': 1.5,    // 24px
	'size-2': 2,        // 32px
	'size-2-5': 2.5,    // 40px
	'size-3': 3,        // 48px
	'size-3-5': 3.5,    // 56px
	'size-4': 4,        // 64px
	'size-4-5': 4.5,    // 72px
	'size-5': 5         // 80px
};

const spacingAttr = Object.entries(sizes);

function spacingStyles(): CSSProp {
	return css`
		${spacingAttr.map(i => css`
			.m-${i[0]} {
				margin: ${i[1]}rem;
			}
		`)}

		${spacingAttr.map(i => css`
			.mx-${i[0]} {
				margin-left: ${i[1]}rem;
				margin-right: ${i[1]}rem;
			}
		`)}

		${spacingAttr.map(i => css`
			.my-${i[0]} {
				margin-top: ${i[1]}rem;
				margin-bottom: ${i[1]}rem;
			}
		`)}

		${spacingAttr.map(i => css`
			.mt-${i[0]} {
				margin-top: ${i[1]}rem;
			}
		`)}

		${spacingAttr.map(i => css`
			.mb-${i[0]} {
				margin-bottom: ${i[1]}rem;
			}
		`)}

		${spacingAttr.map(i => css`
			.ml-${i[0]} {
				margin-left: ${i[1]}rem;
			}
		`)}

		${spacingAttr.map(i => css`
			.mr-${i[0]} {
				margin-right: ${i[1]}rem;
			}
		`)}

		${spacingAttr.map(i => css`
			.p-${i[0]} {
				padding: ${i[1]}rem;
			}
		`)}

		${spacingAttr.map(i => css`
			.px-${i[0]} {
				padding-left: ${i[1]}rem;
				padding-right: ${i[1]}rem;
			}
		`)}

		${spacingAttr.map(i => css`
			.py-${i[0]} {
				padding-top: ${i[1]}rem;
				padding-bottom: ${i[1]}rem;
			}
		`)}

		${spacingAttr.map(i => css`
			.pt-${i[0]} {
				padding-top: ${i[1]}rem;
			}
		`)}

		${spacingAttr.map(i => css`
			.pb-${i[0]} {
				padding-bottom: ${i[1]}rem;
			}
		`)}

		${spacingAttr.map(i => css`
			.pl-${i[0]} {
				padding-left: ${i[1]}rem;
			}
		`)}

		${spacingAttr.map(i => css`
			.pr-${i[0]} {
				padding-right: ${i[1]}rem;
			}
		`)}
	`;
}

export { spacingStyles };
