<template>
  <!-- dPlayer 容器 -->
  <div id="dplayer" class="dplayer"></div>
  <p>是否支持 flv: {{ isSupportFlv }}</p>
  <button @click="postMessage">postMessage</button>
  <button @click="testNavigate">测试跳转</button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
//@ts-ignore
import Dplayer from "dplayer";
import { isIOSDevice } from '../utils'
import axios from 'axios'

export default defineComponent({
  setup() {
    const dp = ref<null | any>(null);
    const isSupportFlv = ref(false);

    onMounted(() => {
      _getDataURL();
      createPlayer();
      bindPlayerEvent();
    });

    const createPlayer = () => {
      if (flvjs.isSupported() && !isIOSDevice()) {
        isSupportFlv.value = true;
        console.log("flv");
        dp.value = new Dplayer({
          container: document.getElementById("dplayer"),
          live: true,
          video: {
            url: "http://192.168.10.106:8000/live/aaa.flv",
            type: "flv",
            
          },
        });
      }
      if(!flvjs.isSupported() || isIOSDevice()){
        isSupportFlv.value = false;
        console.log("m3u8");
        dp.value = new Dplayer({
          container: document.getElementById("dplayer"),
          live: true,
          video: {
            url: "http://192.168.10.106:8000/live/aaa/index.m3u8",
            type: "hls",
          },
        });
      }
    };

    const bindPlayerEvent = () => {
      if (!dp.value) return;
      dp.value.on("loadeddata", () => {
        console.log("加载data");
      });
      dp.value.on("error", (err: Error) => {
        console.log("error", err);
      });
    };

    const _getDataURL = async () => {
      const res = await axios.get('http://localhost:3090/api/')
      console.log('获取视频播放地址', res)
    }

    const postMessage = () => {
      console.log('发送消息 postMessage')
      wx.miniProgram.postMessage({data: 'this is post message'})
    }

    const testNavigate = () => {
      console.log('测试跳转页面')
      wx.miniProgram.navigateTo({url: '/pages/webview-demo/index'})
    }

    return {
      isSupportFlv,
      postMessage,
      testNavigate
    };
  },
});
</script>

<style scoped>
.dplayer {
  width: 100%;
}
</style>
