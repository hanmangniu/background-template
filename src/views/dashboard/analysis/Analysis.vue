<template>
  <div class="content">
    <a-row :gutter="[24, 24]">
      <a-col :span="6">
        <a-card title="总销售额">
          <a-tooltip slot="extra">
            <template slot="title">
              总销售额 tips
            </template>
            <a-icon type="info-circle" />
          </a-tooltip>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="访问量">
          <a-tooltip slot="extra">
            <template slot="title">
              访问量 tips
            </template>
            <a-icon type="info-circle" />
          </a-tooltip>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="支付笔数">
          <a-tooltip slot="extra">
            <template slot="title">
              支付笔数 tips
            </template>
            <a-icon type="info-circle" />
          </a-tooltip>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="运营活动效果">
          <a-tooltip slot="extra">
            <template slot="title">
              运营活动效果 tips
            </template>
            <a-icon type="info-circle" />
          </a-tooltip>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
      </a-col>
      <a-col :span="24">
        <a-card>
          <a-tabs default-active-key="1">
            <div slot="tabBarExtraContent">
              <a class="labelA">今日</a>
              <a class="labelA">本周</a>
              <a class="labelA">本月</a>
              <a class="labelA">全年</a>
              <a-range-picker />
            </div>
            <a-tab-pane key="1" tab="销售额">
              Content of Tab Pane 1
            </a-tab-pane>
            <a-tab-pane key="2" tab="访问量">
              Content of Tab Pane 2
            </a-tab-pane>
          </a-tabs>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="线上热门搜索">
          <p>Card content</p>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="销售额类别占比">
          <p>Card content</p>
        </a-card>
      </a-col>
      <a-col :span="24">
        <a-card>
          <p>Card content</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

export default {
  name: "Analysis",
  components: {},
};
</script>

<style lang="scss" scoped>
.content {
}
</style>
