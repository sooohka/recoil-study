# Recoil study

리액트 만을 위한 상태관리 라이브러리

- atom, selector선언할때 고유의 key값을 전달해줘야됨
- 파생 데이터를 컴포넌트에서 굳이 안바꿔주고 recoil selector에서 자체적으로 변경 가능 -> 컴포넌트가 굉장히 읽기 쉽고 깔끔해짐

## atom

- recoil의 가장 작은 상태 단위
- 읽기쓰기 모두 가능
- 그냥 useState인듯
- atom내에 effects 값을 줄수 있는데 useEffect와 사용법이 매우 비슷함, 콜백인자로 여러 함수를 전달받음

### selector

- 파생데이터
- 순수함수 <-인풋 같으면 아웃풋 항상 같음, race condition이 발생하지않음
- set함수 따로 명시하지 않는 이상 읽기만 가능
- selector(get)에서 다른 의존성을 구독, 다른 의존성이 변경되면 자동으로 변경감지해 selector값 변경-> 의존성 관리도 알아서 해줌
- 값을 자체적으로 캐싱하기때문에 다른 컴포넌트에서 값을 불러올때 캐싱된값을 불러옴, 그러면 불러와야될 데이터가 변경된경우에는?(ex, 서버에서 내려온 값)

selector는 기본적으로 의존성이 바뀔때만 값이 업데이트됨 ->
만약 서버에 값을 추가해서 selector의 값을 업데이트 해줘야되는 경우? ->
따로 서버의 값을 업데이트됨을 확인하는 의미없는 atom을 추가하거나 useRecoilRefresher를 써야됨(Unstable임) <- 이부분이 단점인듯
데이터 흐름이 파악하기 힘든것 같다? //TODO:공부

### family

- atom혹은 selector에 매개변수를 전달해줘야할때 혹은 unique한 값을 통해 여러개의 atom,selector를 관리할때 사용
- 여러 뭉탱이 관리하기 편함
- atom을 삭제하면 뭉탱이에서 없어지긴하는데 어떻게 소멸하는지 모르겟음, 사용하는데가 업으면(구독하는 애가 없으면)소멸하는듯 싶은데 공부 더해보자//TODO:공부
- 커링패턴 사용해서 get,set 정의해줌

### Reset

- reset을 호출해도 set함수가 호출되는데 인자로 DefaultValue라는 값을 전해주는듯
- recoilReset호출되면 default값이 들어옴 instanceOf DefaultValue로 값 비교해서 reset인지 판별 가능
