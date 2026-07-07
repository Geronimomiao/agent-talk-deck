// ── 绝对最小的 workflow:1 个 agent ──
// meta 是唯一必填(name + description);agent() 调一次 = 1 个 agent。
export const meta = {
  name: 'minimal-1',
  description: '最小 workflow:一个 agent 回答一个问题',
}

const answer = await agent('用一句话解释:workflow 里的 agent() 是什么?')
return answer                         // ← 这个值会进存档的 result 字段
// agentCount = 1(引擎数出来的,不是我设的)
