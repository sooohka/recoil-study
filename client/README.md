# Recoil study

리액트 만을 위한 상태관리 라이브러리

- atom, selector선언할때 고유의 key값을 전달해줘야됨

## atom

- recoil의 가장 작은 상태 단위
- 읽기쓰기 모두 가능
- 그냥 useState인듯
- atom내에 effects 값을 줄수 있는데 아직 뭔지 모르겟음 //TODO:

### selector

- 순수함수 -> reliable함
- set함수 따로 명시하지 않는 이상읽기만 가능
- selector(get)에서 다른 의존성을 구독, 다른 의존성이 변경되면 get함수 호출되어 selector값 변경, 의존성 관리도 알아서 해줌,
- 따로 작업없이 비동기로 값을 받을 수 있음, 비동기로 값받을때 Suspense를 이용해 fallback 제공할 수있고 싫으면 Loadable 쓰면 되는듯

selector는 기본적으로 의존성이 바뀔때만 값이 업데이트됨 ->
만약 서버에 값을 추가해서 selector의 값을 업데이트 해줘야되는 경우? ->
따로 서버의 값을 업데이트됨을 확인하는 의미없는 atom을 추가하거나 useRecoilRefresher를 써야됨(Unstable임)
