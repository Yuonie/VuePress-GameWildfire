<template><div><h2 id="_2-1-数据格式" tabindex="-1"><a class="header-anchor" href="#_2-1-数据格式"><span>2.1 数据格式</span></a></h2>
<p>接口请求的参数统一格式如下：</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"唯一ID"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "providerCode"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"服务商ID"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">//我方提供</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "timeStamp"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"时间戳"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "cipherParam"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"加密内容"</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">  //参考2.3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">示例</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"id"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"27801049405228033"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">providerCode"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"27801049405228032"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">cipherParam"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"rKXU+znp+T1lABj1I+OrgJI0+7n7/OFaL5yV/xSLHX7Tbg/8ChEW11u+j/XOzy34SdAUYOb1cMW/WXeTW9Zf2xnW2YbK0tHoy68wdP336DxiYfhCp4Jv/2uBrQ5im8KS8yZkk2o5oCJdfZngYiCWwSOY0Ln/jsMa530RF13OhzJPmKQO/nD9eohKJa7/St0+iHhUOe6jmgQluznWmfrDxg=="</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">"timestamp"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"30000020"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="_2-2-参数timestamp算法" tabindex="-1"><a class="header-anchor" href="#_2-2-参数timestamp算法"><span>2.2 参数timeStamp算法</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>北京时间 <strong>2020 年 01 月 01 日 08 时 00 分 00</strong> 秒起至现在的总秒数，注意接口请求的时间戳和当前时间比，不允许超过 10 秒，否则系统判定为异常请求。</p>
</div>
<h2 id="_2-3-参数cipherparam算法" tabindex="-1"><a class="header-anchor" href="#_2-3-参数cipherparam算法"><span>2.3 参数cipherParam算法</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>采用 <strong>AES 对称加密</strong>，服务商使用平台分配的 32 位私钥为 AES 加密秘钥，再 BASE64 编码进行加密</p>
</div>
</div></template>


