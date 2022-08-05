<template>
  <div class="desc"> 
    <h2>播放器</h2>
    <p>当前直播流方式支持： 
      <span>flv</span>
      与
      <span>
        HLS (.m3u8)
      </span>
    </p>
  </div>
  <div class="my-player">
    <section class="header">
      <input v-model="url" type="text" placeholder="请输入直播播放源">
      <button @click="loadVideo" :disabled="loadBtnDisabled">加载</button>
    </section>
    <section class="player-container"></section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue';
import Dplayer from 'dplayer'

const url = ref<string | null>('');
const dp = ref<null | any>();

onMounted(() => {
  
});

onUnmounted(() => {
  // 清除 dplayer 实例
  if (dp.value) {
    dp.value.destory();
  }
})

// TODO: 增加对输入的 url 合法性校验
const loadBtnDisabled = computed(()=>url.value == '')

const loadVideo = async () => {
  dp.value = new Dplayer({
    container: document.querySelector('.player-container'),
    live: true,
    video: {
      url: url.value,
      type: 'auto'
    }
  });

  dp.value.on('loadeddata', (e: any) => {
    console.log('loadeddata', e);
    dp.value.play();
  });
  dp.value.on('loadedmetadata', (e: any) => {
    console.log('loadedmetadata', e);
  });

}

</script>

<style scoped>
#app{
  background-color: #e0dfc6;
}
.desc{
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}
.my-player{
  box-sizing: border-box;
  min-width: 320px;
  max-width: 720px;
  margin: 0 auto;
}
.header{
  height: 60px;
  display: flex;
  align-items: center;
}
.header input {
  flex: 1;
  margin: 0 10px;
}
.player-container{
  width: 100%;
  min-height: 300px;
}
</style>