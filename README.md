<!--
 * @Author: ShenLing
 * @Date: 2021-12-19 14:56:56
 * @LastEditors: ShenLing
 * @LastEditTime: 2021-12-19 16:48:31
-->
# auto_refresh_website_with_notification

  > 掘金文章：[用JavaScript写一个自动刷新网页通知软考成绩是否出来的脚本](https://juejin.cn/post/7043325422796439560/)
## 1. 项目说明 description
> 本javascript脚本，意在提供自动刷新网页，当网页中出现符合匹配目标的元素，则发送chrome通知给用户

- **目标网页**：软考成绩查询网站
- **检测内容**：目标考试时间出现在网站时（出成绩时），发送chrome提示

- **可衍生内容**：修改自动检测的部分，以适应自定义需要检测内容

## 2. 使用方法 usage
1. 设置chrome，允许网站发送chrome通知
* chrome右上角设置 
* 隐私设置和安全性 
* 权限 >> 通知
* 允许发送通知 >> 添加网站

2. 系统设置，允许chrome通知提示
* 系统偏好设置
* 通知
* Google Chrome >> 允许通知

3. 网站运行`autoRefresh.js`代码
* 打开软考查分网站：https://query.ruankao.org.cn/score
* 按F12，进入控制台
* 将`autoRefresh.js`代码，复制到控制台
* 回车运行

## 3. 运行结果 result
1. 根据提示，输入网页自动刷新相隔秒数

2. 根据提示，确认需要自动检测的考试时间

## 4. 注意要点：
* 建议第一次运行，先输入`2021上半年`，进行测试
* 别忘了测试成功后，修改为本年的考试年份重新运行哦 


## 5. 代码原理简要说明
**用setTimeout，对网页进行定时刷新，并对符合目标内容的元素进行检测，符合结果就发出通知**

**注意要点：**
如果直接用setTimeout，会导致刷新一次后，控制带的代码就消失了，无法进行下一轮刷新，所以必须将页面document内容放置到`<frame/>`中，刷寻frame中的内容，就可以成功定时刷新内容了

