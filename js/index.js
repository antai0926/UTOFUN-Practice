const cards = [
  {
    imgUrl: './img/chinatown.jpeg',
    alt: 'chinatown',
    titleCn: '唐人街',
    titleEn: 'Chinatown',
    description: '紐約老牌中國城',
  },
  {
    imgUrl: './img/soho.jpeg',
    alt: 'soho',
    titleCn: '蘇豪區',
    titleEn: 'Soho',
    description: '紐約藝術時尚的指標',
  },
  {
    imgUrl: './img/financial-district.jpeg',
    alt: 'Financial District',
    titleCn: '金融區',
    titleEn: 'Financial District',
    description: '世界聞名的金融中心',
  },
  {
    imgUrl: './img/upper-east-side.jpeg',
    alt: 'Upper East Side',
    titleCn: '上東區',
    titleEn: 'Upper East Side',
    description: '紐約的富貴代表',
  },
  {
    imgUrl: './img/upper-west-side.jpeg',
    alt: 'Upper West Side',
    titleCn: '上西區',
    titleEn: 'Upper West Side',
    description: '藝術的棲息地',
  },
  {
    imgUrl: './img/roosevelt-island.jpeg',
    alt: 'Roosevelt Island',
    titleCn: '羅斯福島',
    titleEn: 'Roosevelt Island',
    description: '零犯罪社區',
  },
  {
    imgUrl: './img/gramercy-park.jpeg',
    alt: 'Gramercy Park',
    titleCn: '格拉梅西公園',
    titleEn: 'Gramercy Park',
    description: '零犯罪社區',
  },
  {
    imgUrl: './img/little-italy.jpeg',
    alt: 'Little Italy',
    titleCn: '小意大利',
    titleEn: 'Little Italy',
    description: '意大利歷史街區',
  },
  {
    imgUrl: './img/tribeca.jpeg',
    alt: 'Tribeca',
    titleCn: '翠貝卡',
    titleEn: 'Tribeca',
    description: '纽约著名的高端社區',
  },
  {
    imgUrl: './img/east-village.jpeg',
    alt: 'East Village',
    titleCn: '東村',
    titleEn: 'East Village',
    description: '朋克文化的發源地',
  },
  {
    imgUrl: './img/lower-east-side.jpeg',
    alt: 'Lower East Side',
    titleCn: '下東村',
    titleEn: 'Lower East Side',
    description: '永不眠的社區',
  },
  {
    imgUrl: './img/central-park-south-midtown.jpeg',
    alt: 'Central Park South & Midtown',
    titleCn: '中央公園南部及中城',
    titleEn: 'Central Park South & Midtown',
    description: '美不勝收的璀璨之星',
  },
];
const elements = cards.map(
  (card) =>
    `<div class="neighborhoodCard">
          <img src="${card.imgUrl}" alt="${card.alt}" />
          <div class="neighborhood-description">
            <h2 class="title-cn">${card.titleCn}</h2>
            <div class="title-en">${card.titleEn}</div>
            <div class="description">${card.description}</div>
          </div>
        </div> `
);
$('#card-container').append([...elements]);
