import { caseAgentic } from '../data/content'
import './AgenticPipeline.css'

export default function AgenticPipeline() {
  return (
    <div className="pipeline" role="list" aria-label="Chaîne agentique">
      {caseAgentic.pipeline.map((step) => (
        <div
          key={step.step}
          className={`pipeline-step ${step.isHuman ? 'pipeline-step--human' : ''}`}
          role="listitem"
        >
          <div className="pipeline-step-number">
            {step.isHuman ? '👤' : step.step}
          </div>
          <div className="pipeline-step-content">
            <h4 className="pipeline-step-label">{step.label}</h4>
            <p className="pipeline-step-desc">{step.description}</p>
          </div>
          {step.step < caseAgentic.pipeline.length && (
            <div className="pipeline-connector" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  )
}
