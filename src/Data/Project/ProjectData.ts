import WeakMain from "img/Projects/WeakApart/weakMain.gif";
import TscenMain from "img/Projects/Tscenping/Tscen1.svg";
import InsteadMain from "img/Projects/Im/Im1.png";
import TscenRMain from "img/Projects/TscenpingV2/Game.gif";
import KtWizMain from "img/Projects/KtWiz/ktWizMain.jpg";

const PROJECT_DATA = [
  {
    name: "Tscenping",
    mainImage: TscenMain,
    key: "tscenping",
    type: "팀 프로젝트",
    composition: "FrontEnd 2, BackEnd 3",
    part: "FrontEnd",
    period: "2023.10 ~ 2023.12",
    detail:
      "웹 소켓을 이용한 유저 간의 채팅과 PING-PONG 게임을 즐길 수 있는 웹서비스입니다. 42Seoul의 마지막 팀 프로젝트 과제로 소켓을 통해 실시간 채팅과 PING-PONG 게임을 구현해야 하는 프로젝트입니다.",
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
    tool: ["Github", "Figma", "Docker"],
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
      {
        title: "Hybrid Rendering: Next의 Hybrid Rendering을 이용한 렌더링 구현",
        content:
          "✅ Hybrid Rendering 방식을 적용하여 CSR의 초기 로딩 속도와 SEO 한계를 개선하였으며, 서버에서 JavaScript를 제외한 페이지를 미리 렌더링하여 초기 로딩에는 SSR을, 이후 페이지 전환에서는 CSR을 활용하는 구조를 구현하였습니다.",
      },
      {
        title:
          "실시간 데이터 통신을 위한 방법: 웹 소켓을 이용한 실시간 채팅 및 게임 구현",
        content:
          "✅ 소켓 통신과 REST API를 통한 데이터 통신에는 어떤 차이점이 있는지 확연하게 알게 되었습니다. REST API를 이용한 통신은 단방향성 통신이라 실시간 채팅을 구현할 때 주기적으로 데이터 요청을 보내주어야 하지만 소켓 통신은 양방향 통신으로 연결된 상태를 유지하며 실시간성에서 뛰어난 모습을 보이므로 채팅이나 사용자 간의 게임 같은 실시간성이 중요한 기능에 적합하다는 걸 몸소 느꼈습니다.",
      },
      {
        title:
          "서로 다른 개발 환경: Docker를 이용한 개발환경 통합 및 효율성 증대",
        content:
          "✅ Docker를 이용하여 개발 환경을 통합하였습니다. 팀 프로젝트에서 각 팀원끼리의 개발 환경은 다르므로 Docker를 통해서 BackEnd, FrontEnd 테스트 환경을 통일하였습니다. 그 결과로 작성한 코드를 테스트할 때 시간이 단축되고 개발의 효율성이 증대하였습니다.",
      },
      {
        title:
          "FrontEnd 팀의 협업과 성장: 함께 더 나은 서비스를 만들어가는 과정",
        content:
          "✅ 다른 FrontEnd 팀원과 같은 목표로 작업한다는 건 갇혀있던 FrontEnd의 지식을 더 확장할 수 있게 해준 시간이었습니다. 서비스 기능 구현에 있어서 혼자만의 결정으로 정해진 코드가 아닌 서로 간의 코드 리뷰를 통해서 더 좋은 코드를 작성하여 코드 관리가 용이하거나 성능적으로 이점을 줄 수 있는 코드를 작성하였습니다. 이는 팀 프로젝트의 매력을 크게 느끼게 해줬으며 다 함께 성장하는 모습을 보여줬습니다.",
      },
    ],
  },
  {
    name: "Tscenping-V2",
    mainImage: TscenRMain,
    key: "tscenpingv2",
    type: "팀 프로젝트",
    composition: "FrontEnd 2, BackEnd 3, Designer 1",
    part: "FrontEnd",
    period: "2024.03 ~ 2024.05",
    detail:
      '"Tscenping"프로젝트를 완성하고 나서 지인들의 피드백을 통해 전체 디자인 변경과 부가적인 기능을 추가한 Tscenping의 확장 웹 서비스입니다. 전체 디자인을 바꾸고 기존 "Tscenping"의 코드를 그대로 복사하는 게 아닌 처음부터 다시 시작하여서 기존에 문제가 되었던 혹은 아쉬웠던 기능들을 추가하고 보완한 프로젝트입니다.',
    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Zustand",
      "ReactQuery",
      "Socket",
      "Axios",
    ],
    tool: ["Github", "Figma", "Firebase", "AWS"],
    majorFunction: [
      "42, Google API를 이용한 로그인",
      "2차 인증을 통한 로그인 강화",
      "사용자의 닉네임, 상태메세지, 프로필이미지",
      "사용자 간의 친구, 차단 기능",
      "소켓을 이용한 사용자 간의 실시간 채팅, PING-PONG게임",
      "스페셜, 일반 PING-PONG게임 모드",
      "게임 결과에 따른 사용자 래더 점수, 순위",
      "1:1, 비밀번호, 일반, 초대 채팅방 생성",
      "생성된 채팅방의 채팅방 모드, 정보 변경",
      "채팅방에서의 사용자 권한 설정 및 일반 사용자 강퇴, 채팅 금지, 입장 금지 모드",
    ],
    myFunction: [
      "42, Google API를 이용한 로그인 과정 구현",
      "Google QR코드 인증을 통한 2차 인증 강화",
      "사용자 간의 친구, 차단 기능 구현",
      "소켓을 이용한 사용자 간의 실시간 채팅 구현",
      "1:1, 비밀번호, 일반, 초대 채팅방 생성 구현",
      "생성된 채팅방의 채팅방 모드, 정보 변경 구현",
      "채팅방에서의 사용자 권한 설정 및 일반 사용자 강퇴, 채팅 금지, 입장 금지 모드 구현",
      "Firebase에 연결하여 채팅 내용 저장",
      "ReactQuery를 이용하여 기존의 채팅방 리스트 Infinity-scroll 구현 및 데이터 캐싱",
    ],
    result: [
      {
        title: "프로젝트 리팩토링: Next에서 React로의 전환",
        content:
          "✅ 웹, 앱을 둘 다 대응할 수 있도록 전체 디자인을 변경하였고 Next를 React로 바꿔서 프로젝트를 진행하였습니다. 기존 Next에서는 CSR, SSR, SSG와 같은 다양한 종류의 렌더링 방식을 제공하지만 프로젝트의 기능들과 활용성을 생각해 보면 정보를 노출하여서 SEO에 최적화가 필요한 것도 아닌 CSR만 이용해도 문제없겠다고 판단하여 React로 리팩토링을 진행하였습니다.",
      },
      {
        title:
          '메세지 데이터 저장을 통한 사용자 경험 향상: "Firebase"를 이용한 메세지 데이터 저장',
        content:
          '✅ 기존 "Tscenping"에서는 채팅 메시지 데이터를 저장하지 않고 전역변수로 관리하여 새로고침, 채팅방 나가기, 로그아웃을 하면 메세지가 사라진다는 단점이 있었습니다. 이를 보완하기 위해 Firebase에 연결하여 모든 메시지를 저장하고 사용자가 로그아웃 하거나 강제로 브라우저를 종료하거나 새로고침을 해도 휘발성인 메시지가 아닌 Firebase에서 메시지 데이터를 불러와서 사용자의 경험을 향상했습니다.',
      },
      {
        title:
          "데이터 캐싱으로 효율적인 데이터 호출: ReactQuery를 활용한 채팅방 리스트 및 랭킹 리스트 관리",
        content:
          "✅ React Query의 서버 상태관리 및 캐싱 기능을 이용하여 API 호출 상태를 관리하고 데이터 캐싱을 통해 서버 호출을 최소화했습니다. 기존 Tscenping프로젝트보다 상태관리 코드를 400줄에서 300줄로 간소화시키고 데이터 캐싱으로 서버의 부담을 줄였습니다.",
      },
      {
        title:
          "스타일 관리의 효율성 증대: Tailwind CSS를 통한 스타일 관리 및 퍼블리싱 개선",
        content:
          "✅ 기존의 CSSModule 기반 SCSS을 이용한 스타일 관리는 Css-In-Css 방식이어서 컴포넌트마다 CSS 만들어야 했지만 TailWind는 컴포넌트의 요소에 직접 스타일을 정의할 수 있어서 리팩토링 이전의 스타일 관리보다 훨씬 효율적으로 진행하였습니다.",
      },
    ],
  },
  {
    name: "전국 부실 아파트 조회",
    mainImage: WeakMain,
    key: "weakApart",
    type: "팀 프로젝트",
    composition: "FrontEnd 1, BackEnd 1, Designer 1",
    part: "FrontEnd",
    period: "2024.04 ~ 2024.07",
    detail:
      "전국의 부실 아파트를 지도검색을 통해서 조회하고 해당 아파트의 건축정보를 확인할 수 있는 서비스입니다. 2023년에 수면 위로 올라온 부실 아파트 정보들은 뉴스로만 접할 수 있고 뉴스마다 제공하는 부실 아파트 정보들이 다르기 때문에 이를 통합적으로 관리하고 해당 뉴스들도 제공하면 부실 아파트에 대해 관심이 많은 사용자들에게 좋은 경험을 제공할 수 있을 거 같다는 지인과 대화를 통해서 시작하게 된 프로젝트입니다.",
    stack: ["Next", "React", "TypeScript", "Tailwind", "Zustand", "ReactQuery"],
    tool: ["Github", "Figma", "Vercel"],
    majorFunction: [
      "전국 부실 아파트 지도 검색",
      "검색한 아파트의 자세한 건축정보 확인",
      "부실 아파트관련 뉴스 조회",
      "부실 아파트 관련 제보 기능",
    ],
    myFunction: [
      "네이버 지도 API 연결하여 지도 렌더링",
      "검색한 정보를 토대로 네이버 지도 렌더링 변경 및 마커 표시",
      "렌더링 된 마커 클릭 시 해당 부실 아파트에 대한 건축 정보 데이터 호출",
      "커스텀 페이지네이션 기능 구현",
      "PWA 적용",
    ],
    result: [
      {
        title: "서버사이드 데이터 페칭: 최적화된 렌더링과 향상된 사용자 경험",
        content:
          "✅ 서버 컴포넌트에서 서버 사이드 데이터 페칭을 활용하여 렌더링을 최적화하고, 클라이언트에서 발생하는 사이드 이펙트를 최소화함으로써 사용자의 경험을 향상했습니다. 이를 통해 페이지 로딩 속도가 빨라지고, 사용자 인터페이스의 반응성이 좋아졌습니다.",
      },
      {
        title: "커스텀 페이지네이션: 제한된 환경에서의 기능 구현",
        content:
          "✅ 기존 페이지네이션 패키지를 사용하지 않고 직접 커스텀 페이지네이션을 구현함으로써, 제한된 환경에서도 기능을 직접 개발하는 경험을 쌓았습니다.",
      },
      {
        title: "PWA적용 : 웹 애플리케이션을 넘어선 모바일 접근성 향상",
        content:
          "✅ 웹 환경에만 대응하는 게 아닌 앱 환경에도 대응하기 위해 PWA를 적용해 다양한 플랫폼에도 접근하기 편하고 문제없이 동작하는 환경을 구축하였습니다.",
      },
      {
        title:
          "API 성능 향상을 위한 최적화 전략 : 서버 설정을 통한 사용자 UX 개선",
        content:
          "✅ API 호출 응답시간을 획기적으로 줄였습니다. 기존 600ms API 응답 시간과 120ms 걸리는 호출시간을 서버 최적화를 통해 6배 빠른 100ms, 20ms 정도로 단축하여 사용자 경험을 향상했습니다.",
      },
    ],
  },
  {
    name: "KT Wiz AI 분석 페이지 만들기",
    mainImage: KtWizMain,
    key: "ktWiz",
    type: "팀 프로젝트",
    composition: "FrontEnd 3, BackEnd 2",
    part: "FrontEnd, BackEnd",
    period: "2024.06 ~ 2024.07",
    detail:
      '기존 "KT Wiz"홈페이지에서 기존 사용자의 방문 빈도 증가와 새로운 사용자의 유입을 위한 AI기능 구상 및 구현, 기존 UI/UX를 개선하는 프로젝트 입니다.',
    stack: [
      "React",
      "TypeScript",
      "Next",
      "Tailwind",
      "Zustand",
      "Socket",
      "Express",
    ],
    tool: ["Github", "Figma", "Firebase", "AWS"],
    majorFunction: [
      "오늘의 경기 각 팀의 승리확률 예측 기능",
      "투수 vs 타자 승부 예측",
      "재미로 보는 선발투수 운세",
      "구장 주요시설 혼잡도",
      "실시간 채팅 및 클린 봇",
      "데일리 퀴즈 / 랭킹",
      "실시간 경기 정보 제공",
      "포인트 시스템",
      "기존 홈페이지 UI/UX개선",
    ],
    myFunction: [
      "사용자들 간의 실시간 채팅 구현",
      "채팅 서버 구축 및 Firebase 연결",
      "메인페이지 UI/UX 개선",
      "메인페이지 AI기능 API 연결 및 기능 고도화",
    ],
    result: [
      {
        title: "팀장과 PM 역할: 리더십과 의사결정의 중요성 체험",
        content:
          "✅ 처음으로 팀장과 PM 역할을 맡아 프로젝트에 참여했습니다. 팀원으로 참여할 때는 몰랐던 점들이 많았지만, PM과 팀장 역할을 수행하면서 그 중요성과 순간의 선택이 팀과 팀원의 방향을 결정할 수 있음을 몸소 실감했습니다.",
      },
      {
        title: "이미지 전송 기능 추가: 실시간 채팅의 소통 확장",
        content:
          "✅ 기존에 구현했던 실시간 채팅 기능은 텍스트만 전달할 수 있었으나, 이번에는 이미지 전송 기능을 추가하여 사용자들 간의 대화 수단을 확장했습니다. 이를 통해 사용자들은 더 풍부한 소통을 할 수 있게 되었고, 채팅 경험이 한층 향상되었습니다.",
      },
      {
        title: "실시간 채팅 서버: Express와 Firebase를 통한 구현",
        content:
          "✅ Express와 Firebase를 통해 소켓 연결과 직접 채팅 서버 API를 구현함으로써, 서버의 성능과 확장성을 향상했습니다. 이를 통해 사용자들에게 더욱 원활한 실시간 채팅 경험을 제공하였습니다.",
      },
      {
        title: "Node.js 성능 개선: PM2를 활용한 멀티 프로세스 구조 구현",
        content:
          "✅ Node.js는 싱글 스레드 특성상 높은 트래픽 상황에서 성능 저하가 발생할 수 있습니다. 이를 해결하기 위해 PM2 패키지를 활용하여 멀티 프로세스 구조를 구현했습니다. 이 방식으로 클라우드 자원을 효율적으로 사용하면서 동시에 들어오는 요청을 여러 프로세스에 분산시켜 처리함으로써 실시간 채팅 시스템의 전반적인 성능을 개선했습니다.",
      },
    ],
  },
  {
    name: "InsteadMemo",
    mainImage: InsteadMain,
    key: "insteadMemo",
    type: "팀 프로젝트",
    composition: "FrontEnd 1, BackEnd 2",
    part: "FrontEnd",
    period: "2023.01 ~ 2023.06",
    detail:
      "통합적인 메모 관리가 아닌 특정 URL을 추적하여서 메모를 저장하는 웹 확장 웹서비스입니다. 기존의 메모 확장 프로그램은 URL마다 구분 없이 통합적으로 메모를 저장하다 보니 저장한 메모가 많아진다면 특정 페이지에서 기억에 남기기 위해 저장한 메모를 찾는데 불편함을 겪은 경험을 토대로 직접 개발하여 사용하고자 한 프로젝트입니다.",
    stack: ["React", "CssModules", "JavaScript", "Redux", "Axios"],
    tool: ["Github", "Figma", "AWS"],
    majorFunction: [
      "Google, Naver API를 이용한 로그인 구현",
      "Whale manifests를 통한 URL추적",
      "URL마다 사용자가 저장하고 싶은 메모 저장",
    ],
    myFunction: [
      "Google, Naver API를 이용한 로그인 구현",
      "로그인한 사용자의 정보를 브라우저 Secure Cookie에 JWT를 통하여 관리",
      "URL이 변경될 때마다 해당 URL에 저장된 메모 데이터 호출",
      "REST API를 이용한 메모 저장/편집, 중요 메모 지정, 폴더를 생성하여 메모 저장",
    ],
    result: [
      {
        title: "웹 개발의 연결고리: REST API를 이용한 데이터 처리 경험",
        content:
          "✅ 처음으로 REST API를 이용하여 BackEnd와 데이터를 주고받고 데이터를 JavaScript의 메서드를 통하여 가공해서 사용하는 등 웹 개발에서 FrontEnd와 BackEnd가 어떤 방식으로 통신해야 하고 어떤 흐름을 구성해야 하는지 경험을 쌓을 수 있었습니다.",
      },
      {
        title:
          "로그인 인증: JWT, Secure Cookie, Local Storage을 이용한 사용자 로그인 관리",
        content:
          "✅ 이론적으로만 알고 있던 로그인 한 사용자의 정보와 보안성을 관리하는 다양한 방법을 프로젝트에 적용함으로써 각각의 효율성을 알게 되었습니다. 여러 가지 방법 중 선택한 방법은 localStorage에 만료 시간이 짧은 Access Token을 저장하고 Access Token의 재발급 용도로 사용할 Refresh Token은 HTTP Only 옵션과 sameSite 옵션을 정의한 Secure Cookie에 정의함으로써 토큰이 외부로 노출될 가능성을 줄였습니다.",
      },
      {
        title: "서비스화 과정: AWS, Cloud Flare, Nginx를 활용한 배포 경험",
        content:
          "✅ 서비스화하기 위한 배포 작업을 해봄으로써 어떤 사전 작업과 배포를 위해 필요한 게 무엇인지에 대해서 알게 되는 발판이 되었습니다. 서비스의 신뢰성을 높이기 위하여 HTTPS 프로토콜을 적용하고 이를 위한 SSL 인증서를 발급받아 Nginx에 정의하여 AWS의 EC2를 통하여 배포하였습니다.",
      },
      {
        title: "사용자 중심의 프로젝트: 불편을 해소하는 경험으로부터 얻은 교훈",
        content:
          "✅ 실제 불편함을 겪어 개발을 시작한 프로젝트이므로 사용자의 관점에서 프레임을 짜는 방식 혹은 어떤 기능을 만들어야 긍정적인 반응이 나올지 생각하게 된 프로젝트입니다. 해당 경험을 통하여 이후 프로젝트에서도 기능을 만들거나 프레임을 구성할 때 항상 사용자의 관점에서 먼저 바라보게 하는 계기가 되었습니다.",
      },
    ],
  },
];

export default PROJECT_DATA;
