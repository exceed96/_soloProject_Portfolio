const PROJECT_DATA = [
  {
    name: "InsteadMemo",
    key: "insteadMemo",
    type: "팀 프로젝트",
    composition: "FrontEnd 1, BackEnd 2",
    part: "FrontEnd",
    period: "2023.01 ~ 2023.06",
    detail:
      "통합적인 메모 관리가 아닌 특정 URL을 추적하여서 메모를 저장하는 웹 확장 웹서비스 입니다. 기존의 메모 확장 프로그램은 URL마다 구분없이 통합적으로 메모를 저장하다보니 저장한 메모가 많아진다면 특정 페이지에서 기억에 남기기 위해 저장한 메모를 찾는데 불편함을 겪은 경험을 토대로 직접 개발하여 사용하고자 한 프로젝트입니다.",
    stack: ["React", "CssModules", "JavaScript", "Redux", "Axios"],
    tool: ["Github", "Figma"],
    majorFunction: [
      "Google, Naver api를 이용한 로그인 구현",
      "Whale manifests를 통한 URL추적",
      "URL마다 사용자가 저장하고 싶은 메모 저장",
    ],
    myFunction: [
      "Google, Naver api를 이용한 로그인 구현",
      "로그인한 유저의 정보를 브라우저 Secure Cookie에 JWT를 통하여 관리",
      "URL이 변경될때마다 해당 URL에 저장된 메모 데이터 호출",
      "REST API를 이용한 메모 저장/편집, 중요메모 지정, 폴더를 생성하여 메모 저장",
    ],
    result: [
      "웹 개발을 처음 입문한 이후로 제대로 시작해본 웹개발 팀 프로젝트입니다. 처음으로 REST API를 이용하여 BackEnd와 데이터를 주고 받고 데이터를 JavaScript의 메서드를 통하여 가공해서 사용하는 등 웹 개발에서 FrontEnd와 BackEnd가 어떤방식으로 통신을 해야 하고 어떤 흐름을 구성해야 하는지 경험을 쌓을 수 있었습니다.",
      "또한 이론적으로만 알고 있던 로그인 한 유저의 정보와 보안성을 관리하는 다양한 방법을 프로젝트에 적용함으로써 각각의 효율성을 알게 되었습니다. 여러가지 방법 중 선택한 방법은 localStorage에 만료시간이 짧은 Access Token을 저장하고 Access Token의 재발급 용도로 사용할 Refresh Token은 HTTP Only옵션과 sameSite옵션을 정의한 Secure Cookie에 정의 함으로써 토큰이 외부로 노출될 가능성을 줄였습니다.",
      "서비스화를 하기위한 배포 작업을 해봄으로써 어떤 사전 작업과 배포를 위해 필요한게 무엇인지에 대해서 알게 되는 발판이 되었습니다. 서비스의 신뢰성을 높이기 위하여 HTTPS프로토콜을 적용하고 이를 위한 SSL인증서를 발급받아 Nginx에 정의하여 AWS의 EC2를 통하여 배포하였습니다.",
      "실제 불편함을 겪어 개발을 시작한 프로젝트이므로 사용자의 관점에서 프레임을 짜는 방식 혹은 어떤 기능을 만들어야 긍정적인 반응이 나올지 생각하게 된 프로젝트입니다. 해당 경험을 통하여 이후 프로젝트에서도 기능을 만들거나 프레임을 구성할 때 항상 사용자의 관점에서 먼저 바라보게 하는 계기가 되었습니다.",
    ],
  },
  {
    name: "Tscenping",
    key: "tscenping",
    type: "팀 프로젝트",
    composition: "FrontEnd 2, BackEnd 3",
    part: "FrontEnd",
    period: "2023.10 ~ 2023.12",
    detail:
      " 웹 소켓을 이용한 유저간의 채팅과 PING-PONG게임을 즐길 수 있는 웹서비스 입니다. 42Seoul의 마지막 팀 프로젝트 과제로 소켓을 통해 실시간 채팅과 PING-PONG게임을 구현해야 하는 프로젝트입니다. ",
    stack: [
      "React",
      "Next",
      "TypeScript",
      "CssModules",
      "SCSS",
      "Zustand",
      "Socket",
      "Axios",
    ],
    tool: ["Github", "Figma"],
    majorFunction: [
      "42api를 이용한 로그인",
      "2차 인증을 통한 로그인 강화",
      "유저의 닉네임, 상태메세지, 프로필이미지",
      "유저간의 친구, 차단기능",
      "소켓을 이용한 유저간의 실시간 채팅, PING-PONG게임",
      "스페셜, 일반 PING-PONG게임 모드",
      "게임결과에 따른 유저 래더 점수, 순위",
      "1:1, 비밀번호, 일반, 초대채팅방 생성",
      "생성된 채팅방의 채팅방 모드, 정보 변경",
      "채팅방에서의 유저권한 설정 및 일반 유저 강퇴,채팅금지,입장금지 모드",
    ],
    myFunction: [
      "42api를 이용한 로그인 과정 구현",
      "Google QR코드 인증을 통한 2차 인증 강화",
      "유저간의 친구, 차단기능 구현",
      "소켓을 이용한 유저간의 실시간 채팅 구현",
      "1:1, 비밀번호, 일반, 초대채팅방 생성 구현",
      "생성된 채팅방의 채팅방 모드, 정보 변경 구현",
      "채팅방에서의 유저권한 설정 및 일반 유저 강퇴,채팅금지,입장금지 모드 구현",
      "채팅방 목록 조회 페이지네이션 구현",
    ],
    result: [
      "Next의 Hybrid Rendering 방식을 통해 SSR이 어떤 방식으로 이뤄지고 React의 CSR 방식과는 극명하게 다르다는 걸 알게 된 프로젝트입니다. 초기 로딩 속도가 상대적으로 SSR에 비해 느리고 SEO에 취약한 CSR 과는 달리 서버에서 미리 만들어진 페이지를 가져와서 JavaScript 코드를 제외한 HTML 요소들을 포함하여 클라이언트로 보내주기 때문에 SEO에 이점이 있고 Hybrid Rendering 방식을 통해서 초기 페이지를 불러올 때는 SSR 방식을 이용하고 이후 페이지 전환과 컴포넌트 변경 시에는 CSR 방식을 통하여 렌더링을 할 수 있다는 점은 신선한 충격으로 다가왔습니다.",
      "소켓통신과 REST API를 통한 데이터 통신에는 어떤 차이점이 있는지를 확연하게 알게 되었습니다. REST API를 이용한 통신은 단방향성 통신이라 실시간 채팅을 구현할 때 주기적으로 데이터 요청을 보내주어야 하지만 소켓 통신은 양방향 통신으로 연결된 상태를 유지하며 실시간성에서 뛰어난 모습을 보이므로 채팅이나 유저간의 게임같은 실시간성이 중요한 기능에 적합하다는걸 몸소 느꼈습니다.",
      "FroneEnd 파트를 혼자서 진행하는 게 아닌 다른 FrontEnd 팀원과 같은 목표로 작업한다는 건 갇혀있던 FrontEnd의 지식을 더 확장할 수 있게 해준 시간이었습니다. 서비스 기능 구현에 있어서 혼자만의 결정으로 정해진 코드가 아닌 서로 간의 코드 리뷰를 통해서 더 좋은 코드를 작성하여 코드 관리에 용이하거나 성능적으로 이점을 줄 수 있는 코드를 작성하였습니다. 이는 팀 프로젝트의 매력을 크게 느끼게 해줬으며 다 함께 성장하는 모습을 보여줬습니다.",
    ],
  },
  {
    name: "Tscenping-V2",
    key: "tscenpingv2",
    type: "팀 프로젝트",
    composition: "FrontEnd 2, BackEnd 3, Designer 1",
    part: "FrontEnd",
    period: "2024.03 ~ ",
    detail:
      '"Tscenping"프로젝트를 완성하고 나서 지인들의 피드백을 통해 전체 디자인 변경과 부가적인 기능을 추가한 Tscenping의 확장 웹 서비스입니다. 전체 디자인을 바꾸고 기존 "Tscenping"의 코드를 그대로 복사하는게 아닌 처음부터 다시 시작하여서 기존에 문제가 되었던 혹은 아쉬웠던 기능들을 추가하고 보완한 프로젝트입니다.',
    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Zustand",
      "ReactQuery",
      "Socket",
      "Axios",
    ],
    tool: ["Github", "Figma", "Firebase"],
    majorFunction: [
      "42, Google api를 이용한 로그인",
      "2차 인증을 통한 로그인 강화",
      "유저의 닉네임, 상태메세지, 프로필이미지",
      "유저간의 친구, 차단기능",
      "소켓을 이용한 유저간의 실시간 채팅, PING-PONG게임",
      "스페셜, 일반 PING-PONG게임 모드",
      "게임결과에 따른 유저 래더 점수, 순위",
      "1:1, 비밀번호, 일반, 초대채팅방 생성",
      "생성된 채팅방의 채팅방 모드, 정보 변경",
      "채팅방에서의 유저권한 설정 및 일반 유저 강퇴,채팅금지,입장금지 모드",
    ],
    myFunction: [
      "42, Google api를 이용한 로그인 과정 구현",
      "Google QR코드 인증을 통한 2차 인증 강화",
      "유저간의 친구, 차단기능 구현",
      "소켓을 이용한 유저간의 실시간 채팅 구현",
      "1:1, 비밀번호, 일반, 초대채팅방 생성 구현",
      "생성된 채팅방의 채팅방 모드, 정보 변경 구현",
      "채팅방에서의 유저권한 설정 및 일반 유저 강퇴,채팅금지,입장금지 모드 구현",
      "Firebase에 연결하여 채팅 내용 저장",
      "ReactQuery를 이용하여 기존의 채팅방 리스트 Infinity-scroll 구현 및 데이터 캐싱",
    ],
    result: [
      "이전 프로젝트에서는 반응형을 적용하지 않은 디자인이었지만 새로운 버전에서는 웹, 앱을 둘 다 대응할 수 있도록 전체 디자인을 변경하였고 FrontEnd의 스택이었던 Next를 React로 바꿔서 진행하여서 프로젝트를 진행하였습니다. 기존 Next에서는 CSR, SSR, SSG와 같은 다양한 종류의 렌더링 방식을 제공하지만 프로젝트의 기능들과 활용성을 생각해 보면 정보를 노출하여서 SEO에 최적화가 필요한 것도 아닌 CSR만 이용해도 문제없겠다고 판단하여 React로 리팩토링을 진행하였습니다",
      '기존 "Tscenping"에서는 채팅 메시지를 저장하지 않아 전역변수로 관리하던 채팅 메시지는 새로고침을 하면 사라진다는 단점이 있었습니다. 새로고침하면 메시지가 사라지는 채팅 기능은 완벽한 기능이 아니라고 판단하여 이를 보완하기 위해 Firebase에 연결하여 모든 메시지를 저장하고 유저가 로그아웃을 하거나 강제로 브라우저를 종료하거나 새로고침을 해도 휘발성인 메시지가 아닌 Firebase에서 메시지 데이터를 불러와서 사용자의 경험을 향상시켰습니다.',
      "ReactQuery를 이용하여 채팅방 리스트, 랭킹 리스트 데이터들은 캐싱 화하여 서버로의 데이터 중복 호출을 줄이고 클라이언트와 서버와의 데이터 호출 부담을 줄이도록 하였습니다.",
      "기존의 CSSModule 기반 SCSS을 이용한 스타일 관리는 Css-In-Css 방식이어서 각 컴포넌트마다 CSS 만들어야 했지만 TailWind는 Css-In-Js 방식으로 컴포넌트의 요소에 직접 스타일을 정의할 수 있어서 리팩토링 이전의 스타일 관리보다 훨씬 효율적으로 진행하였습니다.",
    ],
  },
  {
    name: "전국 부실아파트 조회",
    key: "weakApart",
    type: "팀 프로젝트",
    composition: "FrontEnd 1, BackEnd 1, Designer 1",
    part: "FrontEnd",
    period: "2024.04 ~ ",
    detail:
      "전국의 부실 아파트를 지도검색을 통해서 조회하고 해당 아파트의 건축정보를 확인할 수 있는 서비스입니다. 2023년에 수면 위로 올라온 부실 아파트 정보들은 뉴스로만 접할 수 있고 뉴스마다 제공하는 부실 아파트 정보들이 다르기 때문에 이를 통합적으로 관리하고 해당 뉴스들도 제공하면 부실 아파트에 대해 관심이 많은 사용자들에게 좋은 경험을 제공할 수 있을 거 같다는 지인과 대화를 통해서 시작하게 된 프로젝트입니다.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Zustand",
      "ReactQuery",
      "Axios",
    ],
    tool: ["Github", "Figma"],
    majorFunction: [
      "전국 부실아파트 지도 검색",
      "검색한 아파트의 자세한 건축정보 확인",
      "부실아파트관련 뉴스 조회",
      "부실아파트 관련 제보 기능",
    ],
    myFunction: [
      "네이버 지도 api 연결하여 지도 렌더링",
      "검색한 정보를 토대로 네이버 지도 렌더링 변경 및 마커 표시",
      "렌더링 된 마커 클릭 시 해당 부실아파트에 대한 건축 정보 데이터 호출",
      "ReactQuery를 이용한 부실아파트 관련 뉴스 페이지네이션 구현",
    ],
    result: ["프로젝트에서 이룬 성과"],
  },
];

export default PROJECT_DATA;
