import WhatIsIniad from "../../../app/articles/content/WhatIsIniad";
import CS1 from "../../../app/articles/content/cs";
import Learn from "../../../app/articles/content/learn"
import Sns from "../../../app/articles/content/sns"

export const contentMap: Record<string, React.ComponentType> = {
  "what-is-iniad": WhatIsIniad,
  "cs1": CS1,
  "learn": Learn,
  "start-sns": Sns
};