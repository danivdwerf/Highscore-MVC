class HighscoreBoard
{
  constructor(e)
  {
    this.element = e;
    this.scores = [];

    this.loadScores();
  }

  loadScores()
  {
    const path2JSON = "highscores.json";
    fetch(path2JSON).then((resp) => resp.json()).then((data) =>
    {
      if(data == null)
        return;

      const len = data.length;
      for(let i = 0; i < len; i++)
      {
        const score = data[i].name +": " + data[i].score.toString();
        this.scores.push(score);
      }

      this.createElement();
    });
  }

  createElement()
  {

    const content = document.createElement('div');
    content.setAttribute('id', "highscore-content");
    this.element.appendChild(content);

    const head = document.createElement('div');
    head.setAttribute('id', "highscore-head");
    content.appendChild(head);

    const header = document.createElement('p');
    header.setAttribute('id', "highscore-headertext");
    header.innerHTML = "Highscores";
    head.appendChild(header);

    const scoreContainer = document.createElement('div');
    scoreContainer.setAttribute('id', "highscore-score-container");
    content.appendChild(scoreContainer);

    let len = this.scores.length;
    for(let i = 0; i < len; i++)
    {
      const score = document.createElement('div');
      score.setAttribute('class', "highscore-score-item");
      scoreContainer.appendChild(score);

      const val = document.createElement('p');
      val.setAttribute('id', "score-"+i.toString());
      val.setAttribute('class', "highscore-score-text");
      val.innerHTML = this.scores[i];
      score.appendChild(val);
    }

  }
};
