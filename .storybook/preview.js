import '../src/index.css' //👈 The app's CSS file goes here

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  // 매개변수(parameters)는 일반적으로 Storybook의 기능과 애드온의 동작을 제어하기 위하여 사용됩니다.
  actions: { argTypesRegex: '^on[A-Z].*' },
  // actions은 클릭이 되었을때 Storybook UI의 actions 패널에 나타날 콜백을 생성할수 있도록 해줍니다.
}
