const REGIONS = {
	// Cape Town
	'af-south-1': [/* Africa */ 'AO', 'BF', 'BI', 'BJ', 'BW', 'CD', 'CF', 'CG', 'CI', 'CM', 'CV', 'DJ', 'DZ', 'ER', 'ET', 'GA', 'GH', 'GM', 'GN', 'GQ', 'GW', 'KE', 'KM', 'LR', 'LS', 'LY', 'MA', 'MG', 'ML', 'MR', 'MU', 'MW', 'MZ', 'NA', 'NE', 'NG', 'RE', 'RW', 'SC', 'SD', 'SH', 'SL', 'SN', 'SO', 'SS', 'ST', 'SZ', 'TD', 'TG', 'TN', 'TZ', 'UG', 'YT', 'ZA', 'ZM', 'ZW'],
	// Hong Kong
	'ap-east-1': ['HK', /* Asia */ 'CN', 'JP', 'KH', 'LA', 'MN', 'MO', 'PH', 'TW', 'VN', /* Korea */ 'KP', 'KR'],
	// Mumbai
	'ap-south-1': [/* India */ 'IN', /* Indian Ocean */ 'IO', /* Sri Lanka */ 'LK', /* Maldives */ 'MV', /* Near India */ 'AF', 'BD', 'BT', 'KG', 'KZ', 'NP', 'PK', 'TJ'],
	// Singapore
	'ap-southeast-1': [/* Brunei */ 'BN', /* Cocos Islands */ 'CC', /* Indonesia */ 'ID', /* Myanmar */ 'MM', /*Malaysia */ 'MY', /* Singapore */ 'SG', /* Thailand */ 'TH'],
	// Sydney
	'ap-southeast-2': [/* Oceania */ 'AS', 'AU', 'CK', 'FJ', 'FM', 'GU', 'KI', 'MH', 'MP', 'NC', 'NF', 'NR', 'NU', 'NZ', 'PF', 'PG', 'PN', 'PW', 'SB', 'TK', 'TL', 'TO', 'TV', 'UM', 'VU', 'WF', 'WS', /* Antarctica */ 'AQ', 'GS', 'TF'],
	// Canada
	'ca-central-1': [/* Canada */ 'CA', /*Greenland */ 'GL'],
	// Frankfurt
	'eu-central-1': [/* Europe */ 'AD', 'AL', 'AT', 'AX', 'BA', 'BE', 'BG', 'BY', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FO', 'FR', 'GG', 'GI', 'GR', 'HR', 'HU', 'IM', 'IS', 'IT', 'JE', 'LI', 'LT', 'LU', 'LV', 'MC', 'MD', 'ME', 'MK', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RS', 'RU', 'SE', 'SI', 'SJ', 'SK', 'SM', 'TR', 'UA', 'VA', 'XK'],
	// London
	'eu-west-2': [/* United Kingdom */ 'GB', /* Ireland */ 'IE'],
	// Bahrain
	'me-south-1': [/* Egypt */ 'EG', /* Middle East */ 'AE', 'AM', 'AZ', 'BH', 'GE', 'IL', 'IQ', 'IR', 'JO', 'KW', 'LB', 'OM', 'PS', 'QA', 'SA', 'SY', 'TM', 'UZ', 'YE'],
	// Sāo Paulo
	'sa-east-1': [/* South America */ 'AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'FK', 'GF', 'GY', 'PE', 'PY', 'SR', 'UY', 'VE'],
	// Oregon
	'us-west-2': [/* North and Central America */ 'AG', 'AI', 'AW', 'BB', 'BL', 'BM', 'BQ', 'BS', 'BZ', 'CR', 'CU', 'CW', 'DM', 'DO', 'GD', 'GP', 'GT', 'HN', 'HT', 'JM', 'KN', 'KY', 'LC', 'MF', 'MQ', 'MS', 'MX', 'NI', 'PA', 'PM', 'PR', 'SV', 'SX', 'TC', 'TT', 'US', 'VC', 'VG', 'VI'],
};

const COUNTRIES = {
	AO: 'af-south-1',
	BF: 'af-south-1',
	BI: 'af-south-1',
	BJ: 'af-south-1',
	BW: 'af-south-1',
	CD: 'af-south-1',
	CF: 'af-south-1',
	CG: 'af-south-1',
	CI: 'af-south-1',
	CM: 'af-south-1',
	CV: 'af-south-1',
	DJ: 'af-south-1',
	DZ: 'af-south-1',
	ER: 'af-south-1',
	ET: 'af-south-1',
	GA: 'af-south-1',
	GH: 'af-south-1',
	GM: 'af-south-1',
	GN: 'af-south-1',
	GQ: 'af-south-1',
	GW: 'af-south-1',
	KE: 'af-south-1',
	KM: 'af-south-1',
	LR: 'af-south-1',
	LS: 'af-south-1',
	LY: 'af-south-1',
	MA: 'af-south-1',
	MG: 'af-south-1',
	ML: 'af-south-1',
	MR: 'af-south-1',
	MU: 'af-south-1',
	MW: 'af-south-1',
	MZ: 'af-south-1',
	NA: 'af-south-1',
	NE: 'af-south-1',
	NG: 'af-south-1',
	RE: 'af-south-1',
	RW: 'af-south-1',
	SC: 'af-south-1',
	SD: 'af-south-1',
	SH: 'af-south-1',
	SL: 'af-south-1',
	SN: 'af-south-1',
	SO: 'af-south-1',
	SS: 'af-south-1',
	ST: 'af-south-1',
	SZ: 'af-south-1',
	TD: 'af-south-1',
	TG: 'af-south-1',
	TN: 'af-south-1',
	TZ: 'af-south-1',
	UG: 'af-south-1',
	YT: 'af-south-1',
	ZA: 'af-south-1',
	ZM: 'af-south-1',
	ZW: 'af-south-1',
	HK: 'ap-east-1',
	CN: 'ap-east-1',
	JP: 'ap-east-1',
	KH: 'ap-east-1',
	LA: 'ap-east-1',
	MN: 'ap-east-1',
	MO: 'ap-east-1',
	PH: 'ap-east-1',
	TW: 'ap-east-1',
	VN: 'ap-east-1',
	KP: 'ap-east-1',
	KR: 'ap-east-1',
	IN: 'ap-south-1',
	IO: 'ap-south-1',
	LK: 'ap-south-1',
	MV: 'ap-south-1',
	AF: 'ap-south-1',
	BD: 'ap-south-1',
	BT: 'ap-south-1',
	KG: 'ap-south-1',
	KZ: 'ap-south-1',
	NP: 'ap-south-1',
	PK: 'ap-south-1',
	TJ: 'ap-south-1',
	BN: 'ap-southeast-1',
	CC: 'ap-southeast-1',
	ID: 'ap-southeast-1',
	MM: 'ap-southeast-1',
	MY: 'ap-southeast-1',
	SG: 'ap-southeast-1',
	TH: 'ap-southeast-1',
	AS: 'ap-southeast-2',
	AU: 'ap-southeast-2',
	CK: 'ap-southeast-2',
	FJ: 'ap-southeast-2',
	FM: 'ap-southeast-2',
	GU: 'ap-southeast-2',
	KI: 'ap-southeast-2',
	MH: 'ap-southeast-2',
	MP: 'ap-southeast-2',
	NC: 'ap-southeast-2',
	NF: 'ap-southeast-2',
	NR: 'ap-southeast-2',
	NU: 'ap-southeast-2',
	NZ: 'ap-southeast-2',
	PF: 'ap-southeast-2',
	PG: 'ap-southeast-2',
	PN: 'ap-southeast-2',
	PW: 'ap-southeast-2',
	SB: 'ap-southeast-2',
	TK: 'ap-southeast-2',
	TL: 'ap-southeast-2',
	TO: 'ap-southeast-2',
	TV: 'ap-southeast-2',
	UM: 'ap-southeast-2',
	VU: 'ap-southeast-2',
	WF: 'ap-southeast-2',
	WS: 'ap-southeast-2',
	AQ: 'ap-southeast-2',
	GS: 'ap-southeast-2',
	TF: 'ap-southeast-2',
	CA: 'ca-central-1',
	GL: 'ca-central-1',
	AD: 'eu-central-1',
	AL: 'eu-central-1',
	AT: 'eu-central-1',
	AX: 'eu-central-1',
	BA: 'eu-central-1',
	BE: 'eu-central-1',
	BG: 'eu-central-1',
	BY: 'eu-central-1',
	CH: 'eu-central-1',
	CY: 'eu-central-1',
	CZ: 'eu-central-1',
	DE: 'eu-central-1',
	DK: 'eu-central-1',
	EE: 'eu-central-1',
	ES: 'eu-central-1',
	FI: 'eu-central-1',
	FO: 'eu-central-1',
	FR: 'eu-central-1',
	GG: 'eu-central-1',
	GI: 'eu-central-1',
	GR: 'eu-central-1',
	HR: 'eu-central-1',
	HU: 'eu-central-1',
	IM: 'eu-central-1',
	IS: 'eu-central-1',
	IT: 'eu-central-1',
	JE: 'eu-central-1',
	LI: 'eu-central-1',
	LT: 'eu-central-1',
	LU: 'eu-central-1',
	LV: 'eu-central-1',
	MC: 'eu-central-1',
	MD: 'eu-central-1',
	ME: 'eu-central-1',
	MK: 'eu-central-1',
	MT: 'eu-central-1',
	NL: 'eu-central-1',
	NO: 'eu-central-1',
	PL: 'eu-central-1',
	PT: 'eu-central-1',
	RO: 'eu-central-1',
	RS: 'eu-central-1',
	RU: 'eu-central-1',
	SE: 'eu-central-1',
	SI: 'eu-central-1',
	SJ: 'eu-central-1',
	SK: 'eu-central-1',
	SM: 'eu-central-1',
	TR: 'eu-central-1',
	UA: 'eu-central-1',
	VA: 'eu-central-1',
	XK: 'eu-central-1',
	GB: 'eu-west-2',
	IE: 'eu-west-2',
	EG: 'me-south-1',
	AE: 'me-south-1',
	AM: 'me-south-1',
	AZ: 'me-south-1',
	BH: 'me-south-1',
	GE: 'me-south-1',
	IL: 'me-south-1',
	IQ: 'me-south-1',
	IR: 'me-south-1',
	JO: 'me-south-1',
	KW: 'me-south-1',
	LB: 'me-south-1',
	OM: 'me-south-1',
	PS: 'me-south-1',
	QA: 'me-south-1',
	SA: 'me-south-1',
	SY: 'me-south-1',
	TM: 'me-south-1',
	UZ: 'me-south-1',
	YE: 'me-south-1',
	AR: 'sa-east-1',
	BO: 'sa-east-1',
	BR: 'sa-east-1',
	CL: 'sa-east-1',
	CO: 'sa-east-1',
	EC: 'sa-east-1',
	FK: 'sa-east-1',
	GF: 'sa-east-1',
	GY: 'sa-east-1',
	PE: 'sa-east-1',
	PY: 'sa-east-1',
	SR: 'sa-east-1',
	UY: 'sa-east-1',
	VE: 'sa-east-1',
	AG: 'us-west-2',
	AI: 'us-west-2',
	AW: 'us-west-2',
	BB: 'us-west-2',
	BL: 'us-west-2',
	BM: 'us-west-2',
	BQ: 'us-west-2',
	BS: 'us-west-2',
	BZ: 'us-west-2',
	CR: 'us-west-2',
	CU: 'us-west-2',
	CW: 'us-west-2',
	DM: 'us-west-2',
	DO: 'us-west-2',
	GD: 'us-west-2',
	GP: 'us-west-2',
	GT: 'us-west-2',
	HN: 'us-west-2',
	HT: 'us-west-2',
	JM: 'us-west-2',
	KN: 'us-west-2',
	KY: 'us-west-2',
	LC: 'us-west-2',
	MF: 'us-west-2',
	MQ: 'us-west-2',
	MS: 'us-west-2',
	MX: 'us-west-2',
	NI: 'us-west-2',
	PA: 'us-west-2',
	PM: 'us-west-2',
	PR: 'us-west-2',
	SV: 'us-west-2',
	SX: 'us-west-2',
	TC: 'us-west-2',
	TT: 'us-west-2',
	US: 'us-west-2',
	VC: 'us-west-2',
	VG: 'us-west-2',
	VI: 'us-west-2'
};

exports.load = () => {

	return Object.entries(REGIONS).reduce((output, [region, countries]) => {
		countries.forEach(country => output[country] = region);
		return output;
	}, {});

}

exports.main = async (event) => {

	const request = event.Records[0].cf.request;

	if (request.headers['cloudfront-viewer-country']) {

		const code = request.headers['cloudfront-viewer-country'][0].value;

		let region = COUNTRIES[code];

		if (region) {

			let domain = `dev.${region}.surrealist.app.s3.${region}.amazonaws.com`;

			request.origin.s3.region = region;
			request.origin.s3.domainName = domain;

			request.headers['host'] = [{
				key: 'host',
				value: domain,
			}];

		}

	}

	return request;

};
