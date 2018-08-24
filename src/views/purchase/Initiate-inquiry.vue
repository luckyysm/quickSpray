<!--发起询价-->

<template>
  <div class="main_wrap">
    <div class="main">
      <div class="Vin">
        <span class="titlePin">VIN码</span><input type="text" value="LB1WA7B39D8037058"/><span class="titleInner">奔驰KOMBI</span>
      </div>
      <div class="listLb">
        <div class="listTitle">
          <span class="list-left"><img src="image/peiz.png"> 配置列表</span>
          <span class="list-right"><img src="image/peiz.png"> 清空列表</span>
        </div>
        <div class="listScroll">
          <div class="table_scroll">
            <table>
              <thead style="transform: translateY(0px);">
              <tr>
                <th>序号</th>
                <th>配件编号</th>
                <th>配件名称</th>
                <th>数量</th>
                <th>配件名称</th>
              </tr>
              </thead>
              <tbody>

              <tr>
                <td>1</td>
                <td><input type="text" value="Lb1weeeassd" class="number"></td>
                <td>GLK300/4MATIC</td>
                <td><p><span class="minus">-</span><input type="text" value="10" class="num"><span class="add">+</span></p></td>
                <td>NBJ0011807310164</td>
              </tr>

              <tr>
                <td>2</td>
                <td><input type="text" value="Lb1weeeassd" class="number"></td>
                <td>GLK300/4MATIC</td>
                <td><p><span class="minus">-</span><input type="text" value="10" class="num"><span class="add">+</span></p></td>
                <td>NBJ0011807310164</td>
              </tr>

              <tr>
                <td>3</td>
                <td><input type="text" value="Lb1weeeassd" class="number"></td>
                <td>GLK300/4MATIC</td>
                <td><p><span class="minus">-</span><input type="text" value="10" class="num"><span class="add">+</span></p></td>
                <td>NBJ0011807310164</td>
              </tr>
              <tr>
                <td>4</td>
                <td><input type="text" value="Lb1weeeassd" class="number"></td>
                <td>GLK300/4MATIC</td>
                <td><p><span class="minus">-</span><input type="text" value="10" class="num"><span class="add">+</span></p></td>
                <td>NBJ0011807310164</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p class="min-title">可批量粘贴配件编号</p>
        <div class="otherTitle">
          <img src="image/other.png">
          <span>其他信息</span>
        </div>
        <div class="otherCon">
          <div class="otherLeft">
            <span>选择配件品质</span>
            <select>
              <option>1111</option>
            </select>
          </div>
          <div class="otherRight">
            <input type="radio" value="">
            <span>需要发票</span>
          </div>
        </div>
        <div class="LxTitle">
          <img src="image/other.png">
          <span>联系方式</span>
        </div>
        <div class="LxCon">
          <div class="LxLeft">
            <span>联系人：王XX</span>
            <span style="margin-left:40px;">电话：18293820190</span>
          </div>
          <div class="LxRight">
            <span>配送至：</span>
            <select>
              <option>1111</option>
            </select>
          </div>
        </div>

        <div class="button">发布询价</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>

  .main .Vin{
    margin:0 20px 10px 10px;
    padding:20px;
    background: #fff;
    border-radius: 6px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    height:34px;
  }

  .main .Vin .titlePin{
    font-size: 12px;
    color: #000000;
  }

  .main .Vin input{
    height:32px;
    border:1px solid #EBEBEB;
    width:200px;
    margin-left:10px;
    padding-left:10px;
    border-radius: 3px;
  }

  .main .Vin .titleInner{
    font-size: 12px;
    color: #000000;
    margin-left:10px;
  }

  .main .listLb{
    margin:0 20px 10px 10px;
    padding:20px;
    background: #fff;
    border-radius: 6px;
  }

  .main .listLb .listTitle{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    width:900px;
  }

  .list-left{
    text-align: left;
    width:50%;
    flex: 0 0 50%;
  }

  .list-left img{
    width:18px;
    height:18px;
    margin-right:5px;
  }
  .list-right{
    width:50%;
    flex: 0 0 50%;
    text-align: right;
    font-size: 12px;
    color: #0064FF;
  }

  .list-right img{
    width:18px;
    height:18px;
    margin-right:5px;
  }

  .table_scroll{
    max-height: 451px;
    overflow: auto;
    margin: 10px 5px 10px 5px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    width:900px;
  }

  table {
    width: 100%;
    position: relative;
    border-collapse: collapse;
    border-spacing: 0;
    word-wrap: break-word;
    word-break: break-all;
  }
  table tr {
    border: 1px solid #F4F4F4;
  }
  table th {
    background-color: #FBF9F7;
    height: 44px;
    padding: 0 9px;
    text-align: center;
    white-space: nowrap;
    font-weight: normal;
    font-size: 12px;
    border: 1px solid #f4f4f4;
  }

  table td {
    height: 39px;
    padding: 0 9px;
    border: 1px solid #f4f4f4;
    font-size: 12px;
    white-space: nowrap;
    color: #585858;
    box-sizing: border-box;
  }

  table td input.number{
    border: 1px solid #0064FF;
    height:30px;
    margin:0 auto;
    display: block;
    padding-left:10px;
  }

  table td p{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }

  table td p input.num{
    width:30px;
    flex: 0 0 30px;
    border: 1px solid #0064FF;
    height:30px;
    text-align: center;
  }
  table td p span.minus,table td p span.add{
    width:20px;
    font-size:16px;
  }
  table td p span.add{
    text-align: right;
  }
  .min-title{
    font-size: 12px;
    color: #C0C0C0;
    padding-left:5px;
  }

  .otherTitle,.LxTitle{
    margin-top:20px;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }

  .otherTitle img,.LxTitle img{
    width:18px;
    height:18px;
  }
  .otherTitle span,.LxTitle span{
    font-size: 14px;
    color: #000000;
    padding-left:5px;
    line-height: 18px;
  }

  .otherCon,.LxCon{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    width:900px;
    padding:20px 0;
    background: #FCFBFA;
    margin-top:5px;
  }

  .otherLeft,.otherRight,.LxLeft,.LxRight{
    width:450px;
    flex:0 0 450px;
    text-align: left;
  }
  .otherCon select,.LxRight select{
    width:250px;
    height:32px;
    border: 1px solid #D7D7D7;
    border-radius: 3px;
    padding-left:20px;
    margin-left:20px;
    -webkit-appearance: none;
    appearance:none;
    -moz-appearance:none;
  }

  .otherRight span{
    margin-left:20px;
  }

  .button{
    width:65px;
    height:30px;
    background: #0064FF;
    border-radius: 3px;
    text-align: center;
    line-height: 30px;
    color:#fff;
    margin:20px auto 0;
  }
</style>
