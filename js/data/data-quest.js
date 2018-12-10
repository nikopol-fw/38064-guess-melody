
const QUESTS = [
  {
    type: `genre`,
    genre: `Rock`,
    tracks: new Set([
      {
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`
      },
      {
        artist: `Jingle Punks`,
        name: `In the Land of Rhinoplasty`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      },
      {
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        artist: `Riot`,
        name: `	Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      }
    ])
  },
  {
    type: `artist`,
    track: {
      artist: `Jingle Punks`,
      name: `Lucky Day`,
      image: `https://i.vimeocdn.com/portrait/992615_300x300`,
      src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
      genre: `Pop`
    },
    answers: [
      {
        artist: `Kevin MacLeod`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`
      },
      {
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      },
      {
        artist: `Riot`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
      }
    ]
  },


  {
    type: `genre`,
    genre: `Pop`,
    tracks: new Set([
      {
        artist: `Jingle Punks`,
        name: `In the Land of Rhinoplasty`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`
      },
      {
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        artist: `Riot`,
        name: `	Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      }
    ])
  },
  {
    type: `artist`,
    track: {
      artist: `Kevin MacLeod`,
      name: `Long Stroll`,
      image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
      src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
      genre: `Jazz`
    },
    answers: [
      {
        artist: `Kevin MacLeod`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`
      },
      {
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      },
      {
        artist: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`
      }
    ]
  },


  {
    type: `genre`,
    genre: `R&B`,
    tracks: new Set([
      {
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        artist: `Riot`,
        name: `	Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `https://f4.bcbits.com/img/a3423930855_16.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`,
        genre: `Electronic`
      }
    ])
  },
  {
    type: `artist`,
    track: {
      artist: `Audionautix`,
      name: `Travel Light`,
      image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
      src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      genre: `Country`
    },
    answers: [
      {
        artist: `Kevin MacLeod`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`
      },
      {
        artist: `Quincas Moreira`,
        image: `https://f4.bcbits.com/img/a3423930855_16.jpg`
      },
      {
        artist: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`
      }
    ]
  },


  {
    type: `genre`,
    genre: `Jazz`,
    tracks: new Set([
      {
        artist: `Riot`,
        name: `	Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `https://f4.bcbits.com/img/a3423930855_16.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`,
        genre: `Electronic`
      },
      {
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`
      }
    ])
  },
  {
    type: `artist`,
    track: {
      artist: `Riot`,
      name: `	Level Plane`,
      image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
      src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
      genre: `R&B`
    },
    answers: [
      {
        artist: `Kevin MacLeod`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`
      },
      {
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      },
      {
        artist: `Riot`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`
      }
    ]
  },


  {
    type: `genre`,
    genre: `Country`,
    tracks: new Set([
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `https://f4.bcbits.com/img/a3423930855_16.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`,
        genre: `Electronic`
      },
      {
        artist: `Audionautix`,
        name: `Travel Light`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`
      },
      {
        artist: `Riot`,
        name: `	Level Plane`,
        image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`
      }
    ])
  },
  {
    type: `artist`,
    track: {
      artist: `Quincas Moreira`,
      name: `Firefly`,
      image: `https://f4.bcbits.com/img/a3423930855_16.jpg`,
      src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`,
      genre: `Electronic`
    },
    answers: [
      {
        artist: `Quincas Moreira`,
        image: `https://f4.bcbits.com/img/a3423930855_16.jpg`
      },
      {
        artist: `Jingle Punks`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`
      },
      {
        artist: `Audionautix`,
        image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`
      }
    ]
  }
];


export default QUESTS;
