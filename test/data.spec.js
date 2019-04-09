global.window = global;
require('../src/data');
require('./data.spec.js');
require('../src/data.js');

const country = 'PER';
const sector = 'SL';
const orderAsc = 'asc';
const orderDesc = 'desc';

const input =
{
  'PER': {
    'indicators': [
      {
        'data': {
          '1960': '',
          '1961': '',
          '1962': '',
          '1963': '',
          '1964': '',
          '1965': '',
          '1966': '',
          '1967': '',
          '1968': '',
          '1969': '',
          '1970': '',
          '1971': '',
          '1972': '',
          '1973': '',
          '1974': '',
          '1975': '',
          '1976': '',
          '1977': '',
          '1978': '',
          '1979': '',
          '1980': '',
          '1981': '',
          '1982': '',
          '1983': '',
          '1984': '',
          '1985': '',
          '1986': '',
          '1987': '',
          '1988': '',
          '1989': '',
          '1990': '',
          '1991': '',
          '1992': '',
          '1993': '',
          '1994': '',
          '1995': '',
          '1996': '',
          '1997': '',
          '1998': '',
          '1999': '',
          '2000': '',
          '2001': '',
          '2002': 31.4799995422363,
          '2003': 29.6299991607666,
          '2004': 27.6299991607666,
          '2005': 27.2099990844727,
          '2006': 26.9699993133545,
          '2007': 27.6700000762939,
          '2008': 26.9599990844727,
          '2009': 27.3600006103516,
          '2010': 25.3400001525879,
          '2011': 24.7999992370605,
          '2012': 25.0400009155273,
          '2013': 24.0900001525879,
          '2014': 24.2099990844727,
          '2015': 21.6800003051758,
          '2016': 23.7399997711182,
          '2017': 23.7600002288818
        },
        'countryName': 'Perú',
        'countryCode': 'PER',
        'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
        'indicatorCode': 'SL.TLF.PART.FE.ZS'
      },
      {
        'data': {
          '1960': '',
          '1961': '',
          '1962': '',
          '1963': '',
          '1964': '',
          '1965': '',
          '1966': '',
          '1967': '',
          '1968': '',
          '1969': '',
          '1970': '',
          '1971': '',
          '1972': '',
          '1973': '',
          '1974': '',
          '1975': '',
          '1976': '',
          '1977': '',
          '1978': '',
          '1979': '',
          '1980': '',
          '1981': '',
          '1982': '',
          '1983': '',
          '1984': '',
          '1985': '',
          '1986': '',
          '1987': '',
          '1988': '',
          '1989': '',
          '1990': '',
          '1991': '',
          '1992': '',
          '1993': '',
          '1994': '',
          '1995': '',
          '1996': '',
          '1997': '',
          '1998': '',
          '1999': '',
          '2000': '',
          '2001': '',
          '2002': 57.3788986206055,
          '2003': 59.2597007751465,
          '2004': 60.5155982971191,
          '2005': 58.567699432373,
          '2006': 59.5596008300781,
          '2007': 62.5275993347168,
          '2008': 61.5718002319336,
          '2009': 63.0060997009277,
          '2010': 64.4614028930664,
          '2011': 64.3878021240234,
          '2012': 63.0351982116699,
          '2013': 62.2015991210938,
          '2014': 61.209400177002,
          '2015': 62.2141990661621,
          '2016': 61.5542984008789,
          '2017': 61.4822998046875
        },
        'countryName': 'Perú',
        'countryCode': 'PER',
        'indicatorName': 'Fuerza laboral con educación intermedia (% del total)',
        'indicatorCode': 'SL.TLF.INTM.ZS'
      }
    ]
  }
};

const inputFilter = [49.7412220022422, 49.7405035767773, 49.7402183429689, 49.7407162477034, 49.7421598401563, 49.7448412584914, 49.748646088836, 49.7536126003403, 49.7601614654142, 49.7688879987984, 49.7799501839058, 49.7934155973814, 49.808789840365, 49.8255564295153, 49.8429127424629, 49.8603836427817, 49.8777486258549, 49.8948468022071, 49.9114673224068, 49.9273047513511, 49.9422032914111, 49.9559225754817, 49.9685307408655, 49.9801156917872, 49.9908374938965, 50.0007930439709, 50.0101419016066, 50.0187099242005, 50.0259637977906, 50.0312651271551, 50.0342150473453, 50.0347572293915, 50.033326649678, 50.030740741891, 50.0280807766137, 50.026045430119, 50.0248434213908, 50.0242997538366, 50.0243673081321, 50.0247698679163, 50.0254679956433, 50.0264571177643, 50.0278180157439, 50.0293807159822, 50.0308948159481, 50.0322306017521, 50.033390040648, 50.0343869352691, 50.0353467232847, 50.0364429426064, 50.0377872826721, 50.0393985400396, 50.0412713143112, 50.0434064796722, 50.0458377854127, 50.0485296754487, 50.0515298151895, 50.0548320644059];

const outputAverage = 49.9463393799351;

const inputDataIndicator = {
  '2002': 31.4799995422363,
  '2003': 29.6299991607666,
  '2004': 27.6299991607666,
  '2005': 27.2099990844727,
  '2006': 26.9699993133545,
  '2007': 27.6700000762939,
  '2008': 26.9599990844727,
  '2009': 27.3600006103516,
  '2010': 25.3400001525879,
  '2011': 24.7999992370605,
  '2012': 25.0400009155273,
  '2013': 24.0900001525879,
  '2014': 24.2099990844727,
  '2015': 21.6800003051758,
  '2016': 23.7399997711182,
  '2017': 23.7600002288818
};

const output =
  [
    {
      countryCode: 'PER',
      countryName: 'Perú',
      data: {
        '1960': '',
        '1961': '',
        '1962': '',
        '1963': '',
        '1964': '',
        '1965': '',
        '1966': '',
        '1967': '',
        '1968': '',
        '1969': '',
        '1970': '',
        '1971': '',
        '1972': '',
        '1973': '',
        '1974': '',
        '1975': '',
        '1976': '',
        '1977': '',
        '1978': '',
        '1979': '',
        '1980': '',
        '1981': '',
        '1982': '',
        '1983': '',
        '1984': '',
        '1985': '',
        '1986': '',
        '1987': '',
        '1988': '',
        '1989': '',
        '1990': '',
        '1991': '',
        '1992': '',
        '1993': '',
        '1994': '',
        '1995': '',
        '1996': '',
        '1997': '',
        '1998': '',
        '1999': '',
        '2000': '',
        '2001': '',
        '2002': 31.4799995422363,
        '2003': 29.6299991607666,
        '2004': 27.6299991607666,
        '2005': 27.2099990844727,
        '2006': 26.9699993133545,
        '2007': 27.6700000762939,
        '2008': 26.9599990844727,
        '2009': 27.3600006103516,
        '2010': 25.3400001525879,
        '2011': 24.7999992370605,
        '2012': 25.0400009155273,
        '2013': 24.0900001525879,
        '2014': 24.2099990844727,
        '2015': 21.6800003051758,
        '2016': 23.7399997711182,
        '2017': 23.7600002288818
      },
      indicatorCode: 'SL.TLF.PART.FE.ZS',
      indicatorName: 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)'
    },
    {
      countryCode: 'PER',
      countryName: 'Perú',
      data: {
        '1960': '',
        '1961': '',
        '1962': '',
        '1963': '',
        '1964': '',
        '1965': '',
        '1966': '',
        '1967': '',
        '1968': '',
        '1969': '',
        '1970': '',
        '1971': '',
        '1972': '',
        '1973': '',
        '1974': '',
        '1975': '',
        '1976': '',
        '1977': '',
        '1978': '',
        '1979': '',
        '1980': '',
        '1981': '',
        '1982': '',
        '1983': '',
        '1984': '',
        '1985': '',
        '1986': '',
        '1987': '',
        '1988': '',
        '1989': '',
        '1990': '',
        '1991': '',
        '1992': '',
        '1993': '',
        '1994': '',
        '1995': '',
        '1996': '',
        '1997': '',
        '1998': '',
        '1999': '',
        '2000': '',
        '2001': '',
        '2002': 57.3788986206055,
        '2003': 59.2597007751465,
        '2004': 60.5155982971191,
        '2005': 58.567699432373,
        '2006': 59.5596008300781,
        '2007': 62.5275993347168,
        '2008': 61.5718002319336,
        '2009': 63.0060997009277,
        '2010': 64.4614028930664,
        '2011': 64.3878021240234,
        '2012': 63.0351982116699,
        '2013': 62.2015991210938,
        '2014': 61.209400177002,
        '2015': 62.2141990661621,
        '2016': 61.5542984008789,
        '2017': 61.4822998046875
      },
      indicatorCode: 'SL.TLF.INTM.ZS',
      indicatorName: 'Fuerza laboral con educación intermedia (% del total)'
    }

  ];

const outputFem = [
  {
    'data': {
      '1960': '',
      '1961': '',
      '1962': '',
      '1963': '',
      '1964': '',
      '1965': '',
      '1966': '',
      '1967': '',
      '1968': '',
      '1969': '',
      '1970': '',
      '1971': '',
      '1972': '',
      '1973': '',
      '1974': '',
      '1975': '',
      '1976': '',
      '1977': '',
      '1978': '',
      '1979': '',
      '1980': '',
      '1981': '',
      '1982': '',
      '1983': '',
      '1984': '',
      '1985': '',
      '1986': '',
      '1987': '',
      '1988': '',
      '1989': '',
      '1990': '',
      '1991': '',
      '1992': '',
      '1993': '',
      '1994': '',
      '1995': '',
      '1996': '',
      '1997': '',
      '1998': '',
      '1999': '',
      '2000': '',
      '2001': '',
      '2002': 31.4799995422363,
      '2003': 29.6299991607666,
      '2004': 27.6299991607666,
      '2005': 27.2099990844727,
      '2006': 26.9699993133545,
      '2007': 27.6700000762939,
      '2008': 26.9599990844727,
      '2009': 27.3600006103516,
      '2010': 25.3400001525879,
      '2011': 24.7999992370605,
      '2012': 25.0400009155273,
      '2013': 24.0900001525879,
      '2014': 24.2099990844727,
      '2015': 21.6800003051758,
      '2016': 23.7399997711182,
      '2017': 23.7600002288818
    },
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
    'indicatorCode': 'SL.TLF.PART.FE.ZS'
  }
];

const outputObjctDataIndicator = {
  '1960': '',
  '1961': '',
  '1962': '',
  '1963': '',
  '1964': '',
  '1965': '',
  '1966': '',
  '1967': '',
  '1968': '',
  '1969': '',
  '1970': '',
  '1971': '',
  '1972': '',
  '1973': '',
  '1974': '',
  '1975': '',
  '1976': '',
  '1977': '',
  '1978': '',
  '1979': '',
  '1980': '',
  '1981': '',
  '1982': '',
  '1983': '',
  '1984': '',
  '1985': '',
  '1986': '',
  '1987': '',
  '1988': '',
  '1989': '',
  '1990': '',
  '1991': '',
  '1992': '',
  '1993': '',
  '1994': '',
  '1995': '',
  '1996': '',
  '1997': '',
  '1998': '',
  '1999': '',
  '2000': '',
  '2001': '',
  '2002': 31.4799995422363,
  '2003': 29.6299991607666,
  '2004': 27.6299991607666,
  '2005': 27.2099990844727,
  '2006': 26.9699993133545,
  '2007': 27.6700000762939,
  '2008': 26.9599990844727,
  '2009': 27.3600006103516,
  '2010': 25.3400001525879,
  '2011': 24.7999992370605,
  '2012': 25.0400009155273,
  '2013': 24.0900001525879,
  '2014': 24.2099990844727,
  '2015': 21.6800003051758,
  '2016': 23.7399997711182,
  '2017': 23.7600002288818
};

const outputOrderDataAsc = [
  ['2015', 21.6800003051758],
  ['2016', 23.7399997711182],
  ['2017', 23.7600002288818],
  ['2013', 24.0900001525879],
  ['2014', 24.2099990844727],
  ['2011', 24.7999992370605],
  ['2012', 25.0400009155273],
  ['2010', 25.3400001525879],
  ['2008', 26.9599990844727],
  ['2006', 26.9699993133545],
  ['2005', 27.2099990844727],
  ['2009', 27.3600006103516],
  ['2004', 27.6299991607666],
  ['2007', 27.6700000762939],
  ['2003', 29.6299991607666],
  ['2002', 31.4799995422363]
];

const outputOrderDataDesc = [
  ["2002", 31.4799995422363],
  ["2003", 29.6299991607666],
  ["2007", 27.6700000762939],
  ["2004", 27.6299991607666],
  ["2009", 27.3600006103516],
  ["2005", 27.2099990844727],
  ["2006", 26.9699993133545],
  ["2008", 26.9599990844727],
  ["2010", 25.3400001525879],
  ["2012", 25.0400009155273],
  ["2011", 24.7999992370605],
  ["2014", 24.2099990844727],
  ["2013", 24.0900001525879],
  ["2017", 23.7600002288818],
  ["2016", 23.7399997711182],
  ["2015", 21.6800003051758]
];


describe('worldBank', () => {
  it('deberia ser un objeto', () => {
    expect(typeof global.worldBank).toBe('object');
  });

  describe('filterDataCountries', () => {
    it('debería ser una función', () => {
      expect(typeof global.worldBank.filterDataCountries).toBe('function');
    });
    it('debería retornar un array de objetos', () => {
      expect(Array.isArray([global.worldBank.filterDataCountries(input, country, sector)])).toBe(true);
    });
    it('debería retornar filtrado por país y sector', () => {
      expect(global.worldBank.filterDataCountries(input, country, sector)).toEqual(output);
    });
  });

  describe('filterFemIndicators', () => {
    it('deberia ser una funcion', () => {
      expect(typeof global.worldBank.filterFemIndicators).toBe('function');
    });
    it('debería retornar un array de objetos', () => {
      expect(Array.isArray([global.worldBank.filterFemIndicators(output)])).toBe(true);
    });
    it('deberia retornar filtrado por sexo femenino', () => {
      expect(global.worldBank.filterFemIndicators(output)).toEqual(outputFem);
    });
  });

  describe('indicatorData', () => {
    it('deberia ser una funcion', () => {
      expect(typeof global.worldBank.indicatorData).toBe('function');
    });
    it('deberia retornar un objeto', () => {
      expect(typeof global.worldBank.indicatorData(outputFem, 'SL.TLF.PART.FE.ZS')).toBe('object');
    });
    it('debería retornar la data,anteriormente filtrado por país, sector y sexo', () => {
      expect(global.worldBank.indicatorData(outputFem, 'SL.TLF.PART.FE.ZS')).toEqual(outputObjctDataIndicator);
    });
    
    it('debería retorna el objeto vacío si no se ingresa el indicador', () => {
      expect(global.worldBank.indicatorData(outputFem, '')).toEqual('');
    });
  });

  describe('orderDataTable', () => {
    it('deberia ser una funcion', () => {
      expect(typeof global.worldBank.orderDataTable).toBe('function');
    });
    it('deberia retornar un array', () => {
      expect(Array.isArray([global.worldBank.orderDataTable(inputDataIndicator, orderDesc)])).toBe(true);
    });
    it('deberia retornar un array de la data ordenada de manera ascendente de la data de un incador', () => {
      expect(global.worldBank.orderDataTable(inputDataIndicator, orderAsc)).toEqual(outputOrderDataAsc);
    });
    it('deberia retornar un array de la data ordenada de manera descendente de la data de un incador', () => {
      expect(global.worldBank.orderDataTable(inputDataIndicator, orderDesc)).toEqual(outputOrderDataDesc);
    });
  });

  describe('averageData', () => {
    it('deberia ser una funcion', () => {
      expect(typeof global.worldBank.averageData).toBe('function');
    });
    it('deberia retornar un number', () => {
      expect(typeof global.worldBank.averageData(inputFilter)).toBe('number');
    });
    it('deberia retornar un number de promedio', () => {
      expect(global.worldBank.averageData(inputFilter)).toEqual(outputAverage);
    });
  });
});