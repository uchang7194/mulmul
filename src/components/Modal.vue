<template>  
  <div class="modal">
    <div class="modal-img-box alpha col col-d-8 col-t-6 col-m-4">
      <ul class="goods-img-list t-center">
        <li>
          <img src="../assets/goods/goods_01.jpg" alt="상품이미지" title="상품명_photo_01">
        </li>
        <!-- <li>
          <img src="../assets/goods/goods_02.jpg" alt="상품이미지" title="상품명_photo_02">
        </li>
        <li>
          <img src="../assets/goods/goods_03.png" alt="상품이미지" title="상품명_photo_03">
        </li>
        <li>
          <img src="../assets/goods/goods_04.jpg" alt="상품이미지" title="상품명_photo_04">
        </li> -->
      </ul>
    </div>
    <div class="modal-text-box alpha omega col col-d-4 col-t-2 col-m-4">
      <div class="user-info">
        <span class="user-profile">사진</span>
        <span class="user-id t-bold">
          <a href="#">missong06</a>
        </span>
      </div>
      <div class="goods-info">
        <span class="user-id t-bold">
          <a href="#">missong06</a>
        </span>
        <span class="goods-spec">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, temporibus!
        </span>
        <ul class="goods-tag-list">
          <li>
            <a href="#" class="tag">#가전제품</a>
          </li>
          <li>
            <a href="#" class="tag">#컴퓨터</a>
          </li>
          <li>
            <a href="#" class="tag">#노트북</a>
          </li>
          <li>
            <a href="#" class="tag">#신상</a>
          </li>
          <li>
            <a href="#" class="tag">#택배가능</a>
          </li>
          <li>
            <a href="#" class="tag">#서울</a>
          </li>
          <li>
            <a href="#" class="tag">#직거래</a>
          </li>
          <li>
            <a href="#" class="tag">#블랙</a>
          </li>
          <li>
            <a href="#" class="tag">#무광</a>
          </li>
          <li>
            <a href="#" class="tag">#삼성</a>
          </li>
          <li>
            <a href="#" class="tag">#소중한</a>
          </li>
          <li>
            <a href="#" class="tag">#노트북</a>
          </li>
          <li>
            <a href="#" class="tag">#안녕</a>
          </li>
          <li>
            <a href="#" class="tag">#잘가</a>
          </li>
        </ul>
        <ul class="comment-list">
          <li>
            <i class="fa fa-times-circle btn-comment-del" aria-hidden="true"></i>
            <span class="user-id t-bold">
              <a href="#">uuuio</a>
            </span>
            <span class="msg">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </span>
          </li>
          <li>
            <i class="fa fa-times-circle btn-comment-del" aria-hidden="true"></i>
            <span class="user-id t-bold">
              <a href="#">sungpowerup</a>
            </span>
            <span class="msg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis.
            </span>
          </li>
          <li>
            <i class="fa fa-times-circle btn-comment-del" aria-hidden="true"></i>
            <span class="user-id t-bold">
              <a href="#">ki1549</a>
            </span>
            <span class="msg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam mollitia, amet hic voluptatibus? Cum dolor non fuga in officia, architecto cumque, quibusdam at iste consectetur eveniet aperiam reiciendis error harum!
            </span>
          </li>
          <li>
            <i class="fa fa-times-circle btn-comment-del" aria-hidden="true"></i>
            <span class="user-id t-bold">
              <a href="#">jmj1224</a>
            </span>
            <span class="msg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iste tenetur assumenda enim beatae soluta ducimus, sunt suscipit eos omnis, libero, ut.
            </span>
          </li>
        </ul>
      </div>
      <textarea class="commont-insert" alt="댓글입렵" placeholder="댓글 달기..." rows="4"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {}
  }
}
</script>

<style lang ="scss">
@import '../scss/modules/base';
  .modal{
    min-width: 55%;
    max-width: 80%;
    /* max-height: 80vh; */
    border: 1px solid #ddd;
    background: #fff;
    position: absolute;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    ul.goods-img-list{
      width: 100%;
      img{
        max-width: 100%;
        max-height: 100%; 
      }
    }   
  }

  .modal-text-box{
    position: relative;
    background: #fff;
    padding-top: $leading / 2;
    height: 100%;
    .user-info{
      border-bottom: 1px solid #ddd;
      line-height: $leading-scale * 2;
      padding-bottom: $leading / 2 ;
      .user-profile{
        display: inline-block;
        height: 100%;
        width: $leading * 2 ;
        background: pink;
        border-radius: $leading;
      }
    }
    .goods-info{
      padding: $leading / 2;
      padding-left: 0;
      width: 100%;
      max-height: 300px;
      /* height: 60vh; */
      overflow: auto;    
      border-bottom: 1px solid #ddd;    
    }
    ul.goods-tag-list{
      /* padding-top : $leading / 2; */
      overflow: auto;
      li{
        float: left;
        padding-right: 3px;
      }
    }
    a.tag{
      color: #0068b7;
    }
    ul.comment-list{
      margin-top: $leading /2 ;
      li{
        padding-right: 15px;
        position: relative;
        .btn-comment-del{
          position: absolute;
          top:1px;
          right:0;
          color: #aaa;
          line-height: $leading-scale;
        }
      } 
    }
    .commont-insert{
      width: 100%;
      outline: none;
      margin: 0;
      padding: 10px 5px;
    }     
  }
   
</style>
