// ── 演示"agent 数目在哪控制":N 个并行 agent,N = 数组长度 ──
export const meta = {
  name: 'minimal-fanout',
  description: '并行 N 个 agent;N 完全由 ITEMS 数组长度决定',
  phases: [{ title: 'Work' }],
}

phase('Work')

const ITEMS = ['登录模块', '支付模块', '搜索模块']   // ★ 这里就是"agent 数目的旋钮"
                                                    //   加一项 = 多一个 agent。改成 100 项 = 100 个 agent。

const results = await parallel(
  ITEMS.map(item => () =>
    agent(`用一句话说明「${item}」最常见的一个安全风险。`, {
      label: `check:${item}`,
      phase: 'Work',
    }))
)

return results
// agentCount === ITEMS.length === 3 —— 没有任何地方写"3",它是 ITEMS.length 的结果
