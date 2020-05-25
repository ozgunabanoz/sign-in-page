import React from 'react';

import styles from './LastSection.module.scss';

const LastSection = () => {
  const articles = [
    {
      title: 'Lorem ipsum dolor sit amet',
      desc:
        'Lorem ipsum dolor sit amet, ad quodsi animal posidonium qui, ea eum affert alterum interpretaris. His quando equidem id, no vim justo ubique. Ne his scripta definiebas delicatissimi, ad rationibus adversarium mei.',
    },
    {
      title: 'Lorem ipsum dolor',
      desc:
        'Lorem ipsum dolor sit amet, ad quodsi animal posidonium qui, ea eum affert alterum interpretaris. His quando equidem id, no vim justo ubique.',
    },
    {
      title: 'Lorem ipsum',
      desc:
        'Lorem ipsum dolor sit amet, ad quodsi animal posidonium qui, ea eum affert alterum interpretaris.',
    },
  ];

  return (
    <div className="row">
      <div className={`row ${styles.title}`}>12 May 2020</div>
      {articles.map((article) => {
        return (
          <div className="row" key={article.title}>
            <div className={`col-1-of-3 ${styles.title}`}>
              {article.title}
            </div>
            <div className="col-2-of-3">{article.desc}</div>
          </div>
        );
      })}
    </div>
  );
};

export default LastSection;
