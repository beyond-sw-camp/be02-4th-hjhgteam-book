<h1 align="center">BOOKSPEDIA 데브옵스 아키텍쳐 구현</h1>


<div align="center">
  <img src="https://github.com/beyond-sw-camp/be02-2nd-hjhgteam-book/assets/96675421/c31829c1-8b9c-48e2-892e-f4dd7b92a6a1"  style="zoom:76%;" align="center"/>
</div>



> [플레이 데이터] 한화시스템 BEYOND SW캠프 / HJHG..


<br>


## 📌 프로젝트 목표

#### 운영중인 환경에 CI/CD 적용
- 소스 코드를 통합하는 과정에서 불필요하고 반복적인 수작업(테스트 후 통합, 무중단 배포, 이전 버전 되돌리기, 생산성 향상 등)을 줄일 수 있습니다


## 🖥️ 운영 환경

#### 쿠버네티스 적용 
- 운영 환경에서 유연성, 동일한 환경을 제공하여 버그를 최소화할 수 있습니다.
- 프라이빗 클라우드 인프라에서 안정적으로 실행될 수 있는 기능을 제공하여 서비스가 안정적으로 운영되고 개발 및 배포 과정을 더욱 효율적으로 만들어 주었습니다.



#### 클러스터 노드 구성

- 마스터 1대, 워커 3대로 클러스터를 구성하였습니다.
<img src="./img/클러스터노드.png">

<br>
 
####  k8s 아키텍처
 
- Calico CNI를 사용해 연결하고 metalib를 사용해 LoadBalancing 하였습니다.

<img src="./img/k8s아키텍처_v4.PNG">


<br>

#### 서비스 아키텍처
 
- User는 LoadBalancer service를 통해 nginx서버를 이용하였습니다.
- pod들의 내부 통신으로 외부에 URL이 노출되지 않습니다.
- HPA를 사용하여 프론트와 백엔드를 스케일링 하였습니다.
- 파드 수는 최소2개 최대10개까지 확장될 수 있고 각 파드는 최소 1기가 최대 2기가 메모리를 할당했습니다.

<img src="./img/서비스아키텍처_v4.PNG">



## 🔍 STACKS



<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white&color=black"><img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white&color=ffa500"><img src="https://img.shields.io/badge/Jenkins-77dd19?style=for-the-badge&logo=jenkins&logoColor=white"/><img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=black&color=blue"/><img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=Kubernetes&logoColor=blue&color=skyblue"/><img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white"><img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">



## ✨ CI/CD 시나리오 설명



#### CI/CD

1. 개발자가 자신의 소스코드를 버전 관리시스템(github)에 저장(push)하였습니다.   
2. push가 되면, github에서 jenkins로 webhook을 전달하였습니다.  
3. jenkins에서 github의 코드를 clone하고 오류를 체크하였습니다.(shell 명령어)
4. 테스트 코드 존재시 테스트를 실행하였습니다. 
5. 테스트 통과시 clone한 소스코드로 새롭게 빌드하고(백 - jar, 프론트 - dist) dockerhub에 push하였습니다. 
6. 배포 방식은 Rolling Update를 이용해 이전 버전과 새 버전의 파드를 점진적으로 교체하여 가용성을 유지하였습니다.
7. slack notification을 이용하여 실패, 성공, 업데이트에 대한 내용이 알림으로 전달하였습니다. 
8. manifest 파일을 쿠버네티스 클러스터에 적용하였습니다.

<img src="./img/image.png">


## CI/CD 테스트 및 결과

<details>
<summary>프론트 엔드 CI/CD</summary>
<div>
<figure align="center"> 
  <p>헤더 변경(Pipeline)</p>
  <img src="./img/cicd.gif"/>
  <p>slack 알림 사진</p>
  <img src="./img/slack-webhook.png"/>
  
 </figure>
</div>
</details>



## 🤼‍♂️팀원

Team : 🐯 김현균

Team : 🐺 이주현

Team : 🐱 전민재

Team : 🦁 홍현주
