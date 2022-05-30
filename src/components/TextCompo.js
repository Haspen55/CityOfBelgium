import React from 'react';

function TextCompo(props) {
  const bruText =
    "Bruxelles ou la ville de Bruxelles est une commune de Belgique de 183 287 habitants, capitale de la Belgique, siège de la Communauté française et de la Communauté flamande, ainsi que siège de plusieurs institutions de l'Union européenne";
  const namText =
    "Namur est la capitale de la région de la Wallonie, en Belgique. À la confluence de la Meuse et de la Sambre se trouve la citadelle de Namur, une forteresse médiévale dotée de jardins, d'une vue panoramique et d'une statue de bronze représentant une tortue géante";
  const anvText =
    "Anvers est une ville portuaire belge située sur l'Escaut, dont l'histoire remonte au Moyen Âge. Au centre-ville, le quartier des diamantaires vieux de plusieurs siècles est le repère de milliers de marchands, tailleurs et polisseurs de diamants. L'architecture Renaissance d'Anvers se reflète dans la Grand-Place, située au cœur de la vieille ville.";
  const liegeText =
    " Liège, ville belge bordant la Meuse située en Wallonie, la région francophone, a longtemps constitué un centre commercial et culturel. Sa vieille ville recèle de nombreux sites d'intérêt datant de l'époque médiévale, comme la collégiale romane de Saint-Barthélemy.";
  const brugeText =
    'Bruges, capitale de la Flandre-Occidentale au nord-ouest de la Belgique, se distingue par ses canaux, ses rues pavées et ses bâtiments médiévaux. Son port, Zeebruges, est un centre important pour la pêche et le commerce européen';
  const tourText =
    "Tournai est une ville située à l'ouest de la Belgique, près de la frontière française. Elle est réputée pour sa vaste cathédrale Notre-Dame, qui possède 5 tours et une rosace. Non loin de là, la Grand-Place est une place triangulaire bordée de bars et de restaurants.";
  const gandText =
    'Gand est une ville portuaire située au nord-ouest de la Belgique, à la confluence de la rivière Lys et du fleuve Escaut. Au Moyen-Âge, elle fut une cité-État de premier plan.';

  const arrText = [
    bruText,
    namText,
    anvText,
    liegeText,
    brugeText,
    tourText,
    gandText,
  ];
  return (
    <div>
      <p className="textVille">
        {/*{arrText[counter]}*/}
        {arrText[props.compteur]}
      </p>
    </div>
  );
}

export default TextCompo;
