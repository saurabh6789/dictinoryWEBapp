@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #4D59FB;
}
::selection{
  color: #fff;
  background: #4D59FB;
}
.wrapper{
  width: 420px;
  border-radius: 7px;
  background: #fff;
  padding: 25px 28px 45px;
  box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.05);
}
.wrapper header{
  font-size: 28px;
  font-weight: 500;
  text-align: center;
}
.wrapper .search{
  position: relative;
  margin: 35px 0 18px;
}
.search input{
  height: 53px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding: 0 42px;
  border: 1px solid #999;
}
.search input:focus{
  padding: 0 41px;
  border: 2px solid #4D59FB;
}
.search input::placeholder{
  color: #B8B8B8;
}
.search :where(i, span){
  position: absolute;
  top: 50%;
  color: #999;
  transform: translateY(-50%);
}
.search i{
  left: 18px;
  pointer-events: none;
  font-size: 16px;
}
.search input:focus ~ i{
  color: #4D59FB;
}
.search span{
  right: 15px;
  cursor: pointer;
  font-size: 18px;
  display: none;
}
.search input:valid ~ span{
  display: block;
}
.wrapper .info-text{
  font-size: 13px;
  color: #9A9A9A;
  margin: -3px 0 -10px;
}
.wrapper.active .info-text{
  display: none;
}
.info-text span{
  font-weight: 500;
}
.wrapper ul{
  height: 0;
  opacity: 0;
  padding-right: 1px;
  overflow-y: hidden;
  transition: all 0.2s ease;
}
.wrapper.active ul{
  opacity: 1;
  height: 303px;
}
.wrapper ul li{
  display: flex;
  list-style: none;
  margin-bottom: 14px;
  align-items: center;
  padding-bottom: 17px;
  border-bottom: 1px solid #D9D9D9;
  justify-content: space-between;
}
ul li:last-child{
  margin-bottom: 0;
  border-bottom: 0;
  padding-bottom: 0;
}
ul .word p{
  font-size: 22px;
  font-weight: 500;
}
ul .word span{
  font-size: 12px;
  color: #989898;
}
ul .word i{
  color: #999;
  font-size: 15px;
  cursor: pointer;
}
ul .content{
  max-height: 215px;
  overflow-y: auto;
}
ul .content::-webkit-scrollbar{
  width: 0px;
}
.content li .details{
  padding-left: 10px;
  border-radius: 4px 0 0 4px;
  border-left: 3px solid #4D59FB;
}
.content li p{
  font-size: 17px;
  font-weight: 500;
}
.content li span{
  font-size: 15px;
  color: #7E7E7E;
}
.content .synonyms .list{
  display: flex;
  flex-wrap: wrap;
}
.content .synonyms span{
  cursor: pointer;
  margin-right: 5px;
  text-decoration: underline;
}
