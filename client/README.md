# Client README.md

### React native 설치가 아예 처음인 경우
* Homebrew와 gem을 통해 필요한 모듈을 설치
₩₩₩
brew install node
brew install watchman
sudo gem install cocoapods
₩₩₩

### 실행하기
* yarn (npm install 본 설명은 이후 yarn을 기본으로 설명됩니다.)으로 종속되는 라이브러리 설치

- ios 로 실행하기
* ios 테스트를 위해 앱스토어에서 xcode를 설치(또는 테스트할 ios 디바이스 컴퓨터에 직접연결)
* cd ios
* pod install
* yarn ios

- android로 실행하기
* android studio를 설치 (https://developer.android.com/studio/install)(또는 테스트 할 안드로이드 디바이스 컴퓨터데 직접 연결)
* yarn android (해본적 없음.. ios 테스트만 해봤음)


### 실행간 무넺가 발생하는 경우
- Could not find "Podfile.lock" 발생하는 경우
₩₩₩
cd ios
pod deintegrate
pod install
₩₩₩