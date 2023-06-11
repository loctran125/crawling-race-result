
# crawling-race-result

# Ý tưởng
Lấy dữ liệu html ở trang race result sau đó chuyển đổi table html thành dạng JSON và trả kết quả API 

# config .env
PORT= <number>
- ex: 8000

URI_MONGODB_TEST= <link-to-database>
- ex: mongodb://localhost:27017/test

# Chạy Local
Tải dự án
```bash
  git clone https://github.com/loctran125/crawling-race-result.git
```
Đi tới thư mục dự án
```bash
  cd crawling-race-result
```
Cài đặt dependencies
```bash
  npm install
```
Build thư mục dist convert từ typscript sang javacsript
```bash
  npm run build
```
Chạy dự án ở Local
```bash
  npm run start
```

# danh sách các API

GET http://localhost:8000/api/races

nếu không truyền filter mặc định lấy kết quả của năm hiện tại (2023)

filter dựa trên kết quả trả về all

- year : filter kết quả theo năm
- driver: filter tay đua thắng cuộc (Winner)
- team: filter đội thắng cuộc (Car)
- grand_prix: filter giải đấu

#### giải thích data trả về:
- "Grand Prix":  giải đấu
- "Date": ngày diễn ra cuộc đua,
- "Winner": người thắng cuộc của giải đấu,
- "Car":  đội đua,
- "Laps":  số vòng đua,
- "Time":  thời gian hoàn thành một vòng đua

- "filterYears": các options lựa chọn để filter năm
- "filterTypes": các option lựa chọn để filter các danh sách như danh sách các đội, danh sách các tay đua
- "typeDetails": các option lựa chọn khi đã chọn filter theo giai đấu, filter theo các đội, filter theo tay đua.

POST http://localhost:8000/api/save-race-result?year=2023

lưu kết quả races result theo từng năm vào database

id trong database là mã hash md5 của grand prix và năm nên chắc chắn sẽ không trùng kết quả giải đấu

nếu id đã tồn tại trong database sẽ không lưu

GET http://localhost:8000/api/drivers?year=2023

nếu không truyền filter mặc định lấy danh sách tay lái của năm hiện tại (2023)
- year : filter kết quả theo năm

#### giải thích data trả về:
- "Pos":  thứ hạng của tay đua
- "Driver": tên tay đua,
- "Nationality": quốc tịch của tay đua,
- "Car":  đội của tay đua,
- "PTS": số điểm tích luỹ của tay đua qua các giải đấu,
- "filterYears": các options lựa chọn để filter năm
- "typeDetails": danh sách các tay đua để xem chi tiết tay đua (truyền thêm id)

GET http://localhost:8000/api/drivers/ALEALB01/alexander-albon?year=2023

nếu không truyền filter mặc định lấy danh sách tay lái của năm hiện tại (2023)
- year : filter kết quả theo năms
- param truyền lên lấy từ id ở danh sách các tay đâu ở mục "typeDetails"

#### giải thích data trả về:

- "Grand Prix":  giải đấu mà tay đua tham gia
- "Date": ngày diễn ra giải đấu,
- "Race Position": vị trí của tay đua,
- "Car":  đội của tay đua,
- "PTS": số điểm tích luỹ của tay đua ở giải đấu,

- "filterYears": các options lựa chọn để filter năm

GET http://localhost:8000/api/teams?year=2023

nếu không truyền filter mặc định lấy danh sách các đội của năm hiện tại (2023)
- year : filter kết quả theo năm

#### giải thích data trả về:
- "Pos":  thứ hạng của đội đua
- "Team": tên đội đua,
- "PTS": số điểm tích luỹ của đội đua qua các giải đấu,

- "filterYears": các options lựa chọn để filter năm
- "typeDetails": danh sách các đội đua để xem chi tiết tay đua (truyền thêm id)

GET http://localhost:8000/api/teams/ferrari?year=2023

nếu không truyền filter mặc định lấy kết quả đội của năm hiện tại (2023)
- year : filter kết quả theo năm
- param truyền lên lấy từ id ở danh sách các team lấy ở mục "typeDetails"

# giải thích data trả về:
- "Grand Prix":  giải đấu mà đội tham gia
- "Date":  ngày tổ chức giải,
- "PTS": số điểm tích luỹ của đội đua ở giải đấu,

- "filterYears": các options lựa chọn để filter năm