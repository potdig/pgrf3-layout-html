<template>
  <div class="info-box">
    <span class="label">Runner</span>
    <span id="runner" class="name">RUNNER1</span>
    <span class="account">@runner_1</span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.info-box {
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid gray;
  padding-bottom: 2px;
  margin-top: 8px;
}

.info-box .label {
  font-size: 1.2em;
  line-height: 1em;
  color: rgba(0, 0, 0, 70%);
}

.info-box .name {
  font-size: 1.15em;
  line-height: 1.2em;
  font-weight: bold;
  text-align: right;
  margin-top: auto;
}

.info-box .time {
  margin-top: auto;
}

.info-box .account {
  font-size: 0.8em;
  line-height: 1.2em;
  font-weight: bold;
  text-align: right;
}
</style>
