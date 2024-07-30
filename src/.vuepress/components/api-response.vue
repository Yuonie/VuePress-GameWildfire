<template>
    <table class="api-table">
      <tr class="table-tr table-head">
        <td class="table-td" colspan="2">参数名</td>
        <td class="table-td">是否必填</td>
        <td class="table-td">类型</td>
        <td class="table-td">描述</td>
      </tr>
      <!-- Loop through each item in params -->
      <template v-for="(item, index) in processedParams" :key="index">
        <!-- Handle items with fields -->
        <template v-if="item.fields && item.fields.length">
          <!-- First row for the item with fields -->
          <tr class="table-tr" :key="`main-${index}`">
            <td :rowspan="item.fields.length" class="table-td-center">
              <div>{{ item.name }}</div>
              <span class="object-label">({{ item.type }})</span>
            </td>
            <td class="table-td">{{ item.fields[0].name }}</td>
            <td class="table-td">{{ item.fields[0].must ? "✅" : "否" }}</td>
            <td class="table-td">{{ item.fields[0].type }}</td>
            <td class="table-td">
              {{ item.fields[0].desc }}
              <a
                v-if="item.fields[0].link_请求结果"
                :href="getHref(link_请求结果)"
                target="_blank"
                rel="noopener"
                >附录：结果编码</a
              >
              <a
                v-if="item.fields[0].link_订单状态"
                :href="getHref(link_订单状态)"
                target="_blank"
                rel="noopener"
                >附录：订单状态</a
              >
  
              <a
                v-if="item.fields[0].link_服务项目"
                :href="getHref(link_服务项目)"
                target="_blank"
                rel="noopener"
                >附录：服务项目</a
              >
  
              <a
                v-if="item.fields[0].link_取消原因"
                :href="getHref(link_取消原因)"
                target="_blank"
                rel="noopener"
                >附录：取消原因</a
              >
            </td>
          </tr>
          <!-- Remaining rows for the fields -->
          <tr
            v-for="(field, fieldIndex) in item.fields.slice(1)"
            :key="`sub-${index}-${fieldIndex}`"
            class="table-tr"
          >
            <td class="table-td">{{ field.name }}</td>
            <td class="table-td">{{ field.must ? "✅" : "否" }}</td>
            <td class="table-td">{{ field.type }}</td>
            <td class="table-td">
              {{ field.desc }}
              <a
                v-if="field.link_请求结果"
                :href="getHref(link_请求结果)"
                target="_blank"
                rel="noopener"
                >附录：结果编码</a
              >
              <a
                v-if="field.link_订单状态"
                :href="getHref(link_订单状态)"
                target="_blank"
                rel="noopener"
                >附录：订单状态</a
              >
  
              <a
                v-if="field.link_服务项目"
                :href="getHref(link_服务项目)"
                target="_blank"
                rel="noopener"
                >附录：服务项目</a
              >
  
              <a
                v-if="field.link_取消原因"
                :href="getHref(link_取消原因)"
                target="_blank"
                rel="noopener"
                >附录：取消原因</a
              >
            </td>
          </tr>
        </template>
        <!-- Handle items without fields -->
        <template v-else>
          <tr class="table-tr" :key="`main-${index}`">
            <td colspan="2" class="table-td">{{ item.name }}</td>
            <td class="table-td">{{ item.must ? "✅" : "否" }}</td>
            <td class="table-td">{{ item.type }}</td>
            <td class="table-td">
              {{ item.desc }}
              <a
                v-if="item.link_请求结果"
                :href="getHref(link_请求结果)"
                target="_blank"
                rel="noopener"
                >附录：结果编码</a
              >
              <a
                v-if="item.link_订单状态"
                :href="getHref(link_订单状态)"
                target="_blank"
                rel="noopener"
                >附录：订单状态</a
              >
  
              <a
                v-if="item.link_服务项目"
                :href="getHref(link_服务项目)"
                target="_blank"
                rel="noopener"
                >附录：服务项目</a
              >
  
              <a
                v-if="item.link_取消原因"
                :href="getHref(link_取消原因)"
                target="_blank"
                rel="noopener"
                >附录：取消原因</a
              >
            </td>
          </tr>
        </template>
      </template>
    </table>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    props: {
      filePath: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        params: [],
        link_请求结果: "/apidoc/api-other#api-status",
        link_订单状态: "/apidoc/api-other#api-orderstatus",
        link_服务项目: "/apidoc/api-other#api-service",
        link_取消原因: "/apidoc/api-other#api-canclereason",
      };
    },
    methods: {
      getHref(item) {
        let link = item;
        // console.log('vuepress环境 -> SW_NODE_ENV=', SW_NODE_ENV)
        const site = this.$site || {};
        let base = site.base;
        if (base) {
          const spstr = base.split("");
          if (spstr[spstr.length - 1] === "/") {
            base = base.slice(0, base.length - 1);
          }
        } else {
          base = "/#";
        }
  
        if (link) {
          link = base + link;
        } else {
          link = "#";
        }
        return link;
      },
    },
    computed: {
      processedParams() {
        return this.params.map((item) => {
          if (item.fields && item.fields.length) {
            item.fields = item.fields.map((field) => ({
              ...field,
              must: field.must || false,
              type: field.type || "String",
              link_请求结果:field.link_请求结果 || false,
              link_订单状态:field.link_订单状态 ||false,
              link_服务项目:field.link_服务项目 || false,
              link_取消原因:field.link_取消原因 ||false
            }));
          } else {
            item.must = item.must || false;
            item.type = item.type || "String";
            item.link_请求结果=item.link_请求结果 || false;
            item.link_订单状态=item.link_订单状态||false;
            item.link_服务项目=item.link_服务项目 || false;
            item.link_取消原因=item.link_取消原因||false;
          }
          return item;
        });
      },
    },
    async created() {
      try {
        const response = await axios.get(this.filePath);
        this.params = response.data.response;
      } catch (error) {
        //console.error("Error fetching API parameters:", error);
      }
    },
  };
  </script>
  
  <style scoped>
  .api-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1em;
    font-family: Arial, sans-serif;
  }
  .table-tr {
    border-bottom: 1px solid #e4e5ea;
  }
  .table-td {
    padding: 10px;
    border: 1px solid #e4e5ea;
    text-align: left;
    vertical-align: top;
  }
  .table-td-center {
    padding: 10px;
    border: 1px solid #e4e5ea;
    text-align: center;
    word-break: break-all;
  }
  .table-head {
    background-color: #f9fafb;
    font-weight: bold;
  }
  .object-label {
    color: red;
    word-break: keep-all;
  }
  </style>
  