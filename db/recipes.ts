export interface Recipe {
  name: string;
  effort: string;
  cost: string;
  veggie: boolean;
  ingredients: string[];
  image: string;
}

export const recipes: Recipe[] = [
  {
    name: "Nudelbombe",
    effort: "low",
    cost: "low",
    veggie: true,
    ingredients: ["Nudeln", "Parmesan", "Sahne", "Tofu", "Zucchini"],
    image:
      "https://i.pinimg.com/originals/e7/6e/85/e76e85891c0360258953cc9c5f8cc4a6.jpg",
  },
  {
    name: "Veggie-Geschnetzeltes mit Ofenkartoffeln",
    effort: "low",
    cost: "low",
    veggie: true,
    ingredients: [
      "Veggie-Geschnetzeltes",
      "Kartoffeln",
      "TK-Gemüse",
      "Rosmarin",
    ],
    image:
      "https://www.lidl-kochen.de/images/recipe-wide/880981/geschnetzeltes-mit-paprikasauce-und-ofenkartoffeln-359018.jpg",
  },
  {
    name: "Spaghetti Carbonara",
    effort: "low",
    cost: "low",
    veggie: false,
    ingredients: ["Spaghetti", "Speck", "Eier", "Parmesan", "Sahne", "Pfeffer"],
    image:
      "https://tse2.mm.bing.net/th?id=OIP.y4A9j9fdkA838cHkagBDzwHaKY&pid=Api",
  },
  {
    name: "Tomaten-Mozzarella-Salat",
    effort: "low",
    cost: "low",
    veggie: true,
    ingredients: [
      "Tomaten",
      "Mozzarella",
      "Basilikum",
      "Olivenöl",
      "Balsamico",
      "Salz",
      "Pfeffer",
    ],
    image:
      "https://littlespicejar.com/wp-content/uploads/2019/07/Marinated-Mozzarella-Tomato-Salad-10-1.jpg",
  },
  {
    name: "Rindergulasch",
    effort: "high",
    cost: "high",
    veggie: false,
    ingredients: [
      "Rindfleisch",
      "Zwiebeln",
      "Paprika",
      "Tomaten",
      "Brühe",
      "Knoblauch",
      "Gewürze",
    ],
    image:
      "https://emmikochteinfach.de/wp-content/uploads/2022/02/seo_Gulasch-Nah-200.jpg",
  },
  {
    name: "Gemüse-Lasagne",
    effort: "high",
    cost: "low",
    veggie: true,
    ingredients: [
      "Lasagneblätter",
      "Zucchini",
      "Aubergine",
      "Tomatensauce",
      "Käse",
      "Zwiebeln",
      "Knoblauch",
    ],
    image:
      "https://www.gaumenfreundin.de/wp-content/uploads/2023/03/Vegetarische-Lasagne-mit-Gemuese.jpg",
  },
  {
    name: "Hähnchen-Curry",
    effort: "high",
    cost: "low",
    veggie: false,
    ingredients: [
      "Hähnchenbrust",
      "Kokosmilch",
      "Currypaste",
      "Paprika",
      "Zwiebeln",
      "Reis",
    ],
    image:
      "http://www.hier-leben-magazin.de/wp-content/uploads/2019/08/kokos-haehnchen-curry-fertig-angerichtet.jpg",
  },
  {
    name: "Quinoa-Salat",
    effort: "low",
    cost: "low",
    veggie: true,
    ingredients: [
      "Quinoa",
      "Gurken",
      "Tomaten",
      "Feta",
      "Minze",
      "Zitronensaft",
    ],
    image:
      "https://reciperunner.com/wp-content/uploads/2019/07/Summer-Quinoa-Salad-Photo.jpg",
  },
  {
    name: "Ofenkartoffeln mit Kräuterquark",
    effort: "low",
    cost: "low",
    veggie: true,
    ingredients: [
      "Kartoffeln",
      "Quark",
      "Schnittlauch",
      "Petersilie",
      "Knoblauch",
      "Salz",
      "Pfeffer",
    ],
    image:
      "https://tse4.mm.bing.net/th?id=OIP.68Puhh4DCOYllQuPlkDNwQHaHa&pid=Api",
  },
  {
    name: "Rote-Bete-Risotto",
    effort: "high",
    cost: "low",
    veggie: true,
    ingredients: [
      "Rote Bete",
      "Reis",
      "Brühe",
      "Zwiebeln",
      "Parmesan",
      "Weißwein",
    ],
    image:
      "https://www.pastaweb.de/wp-content/uploads/2006/03/rote-bete-risotto.jpg",
  },
  {
    name: "Linsensuppe",
    effort: "low",
    cost: "low",
    veggie: true,
    ingredients: [
      "Linsen",
      "Karotten",
      "Sellerie",
      "Zwiebeln",
      "Brühe",
      "Lorbeerblatt",
    ],
    image:
      "https://www.bofrost.de/medias/00227-DE-linsensuppe-pic1.jpg-W1440xH1200R1.2?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDU3MjIxNHxpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2hiNS9oMGEvOTAwNjYwMjk3NzMxMC5qcGd8MDIxM2NmYzY1ZTZjNzAwMTFiODZkYjA2YTRlYWU5MDBmZGU0Njk0MWRjODczZDU1YTAxNDFiYmEyMzBlYmQxYQ",
  },
  {
    name: "Fischstäbchen mit Kartoffelpüree",
    effort: "low",
    cost: "low",
    veggie: false,
    ingredients: [
      "Fischstäbchen",
      "Kartoffeln",
      "Milch",
      "Butter",
      "Salz",
      "Pfeffer",
    ],
    image:
      "https://www.lidl-kochen.de/images/recipe-wide/770531/fischstaebchen-mit-kartoffelpueree-und-remoulade-325509.jpg",
  },
  {
    name: "Falafel mit Hummus",
    effort: "high",
    cost: "low",
    veggie: true,
    ingredients: [
      "Kichererbsen",
      "Tahini",
      "Zitronensaft",
      "Knoblauch",
      "Petersilie",
      "Gewürze",
    ],
    image:
      "https://thefastrecipe.com/wp-content/uploads/2022/02/falafel-plate.jpg",
  },
  {
    name: "Spinat-Feta-Strudel",
    effort: "high",
    cost: "low",
    veggie: true,
    ingredients: [
      "Blätterteig",
      "Spinat",
      "Feta",
      "Zwiebeln",
      "Knoblauch",
      "Gewürze",
    ],
    image:
      "https://www.gudrunvonmoedling.at/wp-content/uploads/2015/05/Feta-Strudel.jpg",
  },
  {
    name: "Putenbrust mit Gemüse",
    effort: "low",
    cost: "high",
    veggie: false,
    ingredients: [
      "Putenbrust",
      "Zucchini",
      "Paprika",
      "Zwiebeln",
      "Gewürze",
      "Öl",
    ],
    image:
      "https://lowcarbrezeptdestages.de/wp-content/uploads/2020/07/Putenbrust-mit-Gem%C3%BCse.jpg",
  },
  {
    name: "Blumenkohl-Curry",
    effort: "high",
    cost: "low",
    veggie: true,
    ingredients: [
      "Blumenkohl",
      "Kokosmilch",
      "Currypaste",
      "Zwiebeln",
      "Tomaten",
      "Gewürze",
    ],
    image:
      "https://www.holladiekochfee.de/wp-content/uploads/2017/08/Curry-2-1-880x911.jpg",
  },
  {
    name: "Moussaka",
    effort: "high",
    cost: "high",
    veggie: false,
    ingredients: [
      "Hackfleisch",
      "Auberginen",
      "Kartoffeln",
      "Bechamelsauce",
      "Tomatensauce",
      "Zwiebeln",
      "Knoblauch",
    ],
    image:
      "https://i.pinimg.com/originals/1f/44/3d/1f443d9fe4b7c19eaef3b38e69b00528.jpg",
  },
  {
    name: "Griechischer Salat",
    effort: "low",
    cost: "low",
    veggie: true,
    ingredients: [
      "Gurken",
      "Tomaten",
      "Feta",
      "Oliven",
      "Zwiebeln",
      "Olivenöl",
      "Oregano",
    ],
    image:
      "https://image.essen-und-trinken.de/11850352/t/F_/v8/w1440/r1/-/griechischer-salat-03a82e12aa3591e27fcb83ed25ca193c-griechischer-salat-jpg--18006-.jpg",
  },
  {
    name: "Rindersteak mit Ofengemüse",
    effort: "low",
    cost: "high",
    veggie: false,
    ingredients: [
      "Rindersteak",
      "Karotten",
      "Paprika",
      "Zucchini",
      "Öl",
      "Gewürze",
    ],
    image:
      "https://images.eatsmarter.de/sites/default/files/styles/1024x768/public/rindersteaks-auf-ofengemuese-mit-datteln-650449-1.jpg",
  },
  {
    name: "Gemüsecurry mit Reis",
    effort: "high",
    cost: "low",
    veggie: true,
    ingredients: [
      "Reis",
      "Kokosmilch",
      "Currypaste",
      "Zucchini",
      "Karotten",
      "Zwiebeln",
    ],
    image:
      "https://www.madamecuisine.de/wp-content/uploads/2020/06/gemuese-curry-featured.jpg",
  },
  {
    name: "Ratatouille",
    effort: "high",
    cost: "low",
    veggie: true,
    ingredients: [
      "Auberginen",
      "Zucchini",
      "Tomaten",
      "Paprika",
      "Zwiebeln",
      "Knoblauch",
      "Kräuter",
    ],
    image:
      "https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg",
  },
  {
    name: "Chili con Carne",
    effort: "high",
    cost: "low",
    veggie: false,
    ingredients: [
      "Hackfleisch",
      "Bohnen",
      "Mais",
      "Tomaten",
      "Zwiebeln",
      "Paprika",
      "Gewürze",
    ],
    image:
      "https://insidehumans.com/wp-content/uploads/2018/08/Chilli-Con-Carne.jpg",
  },
  {
    name: "Brokkoli-Kartoffel-Auflauf",
    effort: "high",
    cost: "low",
    veggie: true,
    ingredients: [
      "Brokkoli",
      "Kartoffeln",
      "Käse",
      "Sahne",
      "Zwiebeln",
      "Gewürze",
    ],
    image:
      "https://www.eatbetter.de/sites/eatbetter.de/files/styles/facebook/public/2021-06/kartoffel_brokkoli_auflauf_2.jpg?h=4521fff0&itok=L3SWmmss",
  },
  {
    name: "Hähnchen-Salat",
    effort: "low",
    cost: "low",
    veggie: false,
    ingredients: [
      "Hähnchenbrust",
      "Salat",
      "Tomaten",
      "Gurken",
      "Olivenöl",
      "Zitronensaft",
    ],
    image:
      "https://www.berrylove.de/wp-content/uploads/2019/07/keto-haehnchen-salat-aus-nur-5-zutaten_03-1170x878.jpg",
  },
  {
    name: "Spargel mit Sauce Hollandaise",
    effort: "high",
    cost: "high",
    veggie: true,
    ingredients: ["Spargel", "Butter", "Eier", "Zitrone", "Gewürze"],
    image:
      "https://images.eatsmarter.de/sites/default/files/styles/max_size/public/weisser-spargel-mit-sauce-hollandaise-und-kartoffeln-58903.jpg",
  },
  {
    name: "Pilzrisotto",
    effort: "high",
    cost: "low",
    veggie: true,
    ingredients: ["Reis", "Pilze", "Brühe", "Zwiebeln", "Parmesan", "Weißwein"],
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Wild-Mushroom-Risotto-25.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1599768474&s=37087d4afca2e6407eb5b82f4dbdfeb7",
  },
  {
    name: "Lachsfilet mit Gemüse",
    effort: "low",
    cost: "high",
    veggie: false,
    ingredients: [
      "Lachsfilet",
      "Brokkoli",
      "Karotten",
      "Zitrone",
      "Öl",
      "Gewürze",
    ],
    image:
      "https://img.chefkoch-cdn.de/rezepte/1126861219147382/bilder/1410834/crop-960x720/lachs-mit-gemuese-und-kartoffeln.jpg",
  },
  {
    name: "Shakshuka",
    effort: "high",
    cost: "low",
    veggie: true,
    ingredients: [
      "Tomaten",
      "Paprika",
      "Eier",
      "Zwiebeln",
      "Knoblauch",
      "Gewürze",
    ],
    image:
      "https://cookieandkate.com/images/2019/02/best-shakshuka-recipe-3.jpg",
  },
];
