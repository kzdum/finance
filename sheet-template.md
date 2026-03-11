# Google Sheets Template

Create a Google Sheet with the following tabs and headers (row 1):

1) investor
- date | value

2) credit
- date | value

3) overseas
- date | buy | sell

4) news
- title | meta | summary | url | status | updatedAt

Notes
- date format: YYYY/MM/DD
- values can be numbers or strings; the site will parse them.


## 자동 업데이트(필수)
Apps Script에서 아래 작업을 해주세요.
1) `updateNewsDaily` 함수 선택 → 실행 (권한 승인)
2) 트리거 추가: 시간 기반 → 매일 오전 7시 (Asia/Seoul)
3) 프로젝트 설정에서 시간대를 Asia/Seoul로 설정
