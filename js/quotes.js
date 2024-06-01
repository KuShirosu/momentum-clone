const quotes = [
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘 존슨",
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
    author: "파울로 코엘료",
  },
  {
    quote:
      "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
    author: "찰리 채플린",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 허버드",
  },
  {
    quote: "피할수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다.",
    author: "마르쿠스 아우렐리우스 안토니우스",
  },
  {
    quote:
      "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다. 더 많이 실험할수록 더 나아진다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "별을 따려고 손을 뻗는 사람은 자기 발밑의 꽃을 잊어버린다.",
    author: "제레미 벤담",
  },
  {
    quote:
      "모든 아이는 본래 화가다. 문제는 어떻게 하면 나이를 먹어서도 화가로 남아 있는가 하는 것이다.",
    author: "파블로 피카소",
  },
  {
    quote:
      "느닷없이 떠오르는 생각이 가장 귀중한 것이며, 보관해야할 가치가 있는 것이다.",
    author: "베이컨",
  },
];

const quotes_programming = [
  {
    quote: "훌륭한 코드는 훌륭한 문서보다 낫다.",
    author: "Steve McConnell",
  },
  {
    quote:
      "당신이 6개월 이상 한 번도 보지 않은 코드는 다른 사람이 다시 만드는 게 훨씬 더 나을 수 있다.",
    author: "Eagleson’s Law",
  },
  {
    quote:
      "좋은 소프트웨어의 기능이란, 복잡한 것을 간단하게 보이도록 만드는 것이다.",
    author: "Grady Booch",
  },
  {
    quote: "복잡성을 통제하는 것이 컴퓨터 프로그래밍의 기초다.",
    author: "Brian Kernigan",
  },
  {
    quote:
      "올바르게 작동하지 않는다고 걱정하지 마라. 만일 모든 게 잘 된다면, 굳이 당신이 일할 이유가 없다.",
    author: "Mosher’s Law",
  },
  {
    quote:
      "코드 수를 기준으로 프로그램의 진도를 측정하는 것은 비행기 제작 진도를 무게로 측정하는 것과 같다.",
    author: "Bill Gates",
  },
  {
    quote: "먼저 문제를 풀고 그 다음에 개발을 하라.",
    author: "John Johnson",
  },
  {
    quote:
      "낙관론은 프로그래머라는 직업 관점에서 위험물이다. 피드백이 해결책이다.",
    author: "Kent Beck",
  },
  {
    quote: "C,C++을 쓰는 것은 안전가드를 제거한 전기톱을 쓰는 것과 같다.",
    author: "Bob Gray",
  },
  {
    quote:
      "무료 소프트웨어를 두려워하는 사람들은 자신들의 제품이 그것보다 못하기 때문이다.",
    author: "David Emery",
  },
  {
    quote:
      "항상 이런 생각으로 개발에 임하라. “내 소스를 유지보수하게 되는 개발자가 내가 어디 살고 있는지 알고 있는 과격한 사이코패스일 거야”",
    author: "Martin Golding",
  },
  {
    quote:
      "실수는 사람의 것이다. 그러나 정말 일을 엉망으로 만들고 싶다면 컴퓨터가 필요하다.",
    author: "Paul Ehrlich",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
