<template><div><h2 id="接口描述" tabindex="-1"><a class="header-anchor" href="#接口描述"><span>接口描述</span></a></h2>
<p>同步救援车辆信息</p>
<h2 id="接口名称" tabindex="-1"><a class="header-anchor" href="#接口名称"><span>接口名称</span></a></h2>
<ul>
<li>接口名称：<code v-pre>/rescueCarInfo</code></li>
<li>请求方式：<code v-pre>HTTP-POST/application/json</code></li>
<li>接口提供方：云平台</li>
<li>接口消费方：服务商</li>
</ul>
<h2 id="参数设计" tabindex="-1"><a class="header-anchor" href="#参数设计"><span>参数设计</span></a></h2>
<table>
<thead>
<tr>
<th>参数名</th>
<th>是否必填</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>operateType</code></td>
<td>✅</td>
<td>String</td>
<td>操作类型。N-新增,Y-审核,C-作废</td>
</tr>
<tr>
<td><code v-pre>rescueVehicle</code></td>
<td>✅</td>
<td>String</td>
<td>救援车车牌号</td>
</tr>
<tr>
<td><code v-pre>vehicleType</code></td>
<td>✅</td>
<td>String</td>
<td>车辆类型，见附录车辆类型</td>
</tr>
<tr>
<td><code v-pre>serviceList</code></td>
<td>✅</td>
<td>String</td>
<td>车辆的服务类型。用逗号隔开：1,2,3,4,5</td>
</tr>
<tr>
<td><code v-pre>timestamp</code></td>
<td>✅</td>
<td>String</td>
<td>时间(格式：yyyy-MM-dd HH:mm:ss)</td>
</tr>
</tbody>
</table>
<h2 id="返回结果" tabindex="-1"><a class="header-anchor" href="#返回结果"><span>返回结果</span></a></h2>
<table>
<thead>
<tr>
<th>参数名</th>
<th>是否必填</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>code</code></td>
<td>✅</td>
<td>Integer</td>
<td>返回码，见附录请求返回码</td>
</tr>
<tr>
<td><code v-pre>message</code></td>
<td>✅</td>
<td>String</td>
<td>返回信息</td>
</tr>
<tr>
<td><code v-pre>data</code></td>
<td>✅</td>
<td>String</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="请求示例" tabindex="-1"><a class="header-anchor" href="#请求示例"><span>请求示例</span></a></h2>
<div class="hint-container info">
<p class="hint-container-title">未加密参数</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "operateType"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"N"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "rescueVehicle"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"鲁K61888"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "vehicleType"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"C01"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "serviceList"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"1,2,3"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "timestamp"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2024-01-26 11:05:33"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
</div></template>


