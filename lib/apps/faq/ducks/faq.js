import assign from 'lodash/object/assign';
import find from 'lodash/collection/find';

import faqs from '../data';

export const OPEN = 'ftbl/faq/faq/OPEN';
export const CLOSE = 'ftbl/faq/faq/CLOSE';
export const TOGGLE = 'ftbl/faq/faq/TOGGLE';

export const initialState = {
  faqs
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
  case OPEN:
    return assign({}, state);

  case CLOSE:
    return assign({}, state);

  case TOGGLE:
    const activeSection = find(state.faqs, { active: true });

    const faqs = state.faqs.map(section => {
      let active = (section.index === payload.section);

      if (activeSection && activeSection.index === section.index && payload.question == null) {
        active = !activeSection.active;
      }

      let activeQuestion = find(section.questions, { active: true });

      const questions = section.questions.map(question => {
        let active = (section.index === payload.section && question.index === payload.question);

        if (activeQuestion && activeQuestion.index === question.index) active = !activeQuestion.active;

        return assign({}, question, { active });
      });

      return assign({}, section, { active, questions });
    });

    return assign({}, state, { faqs });

  default:
    return state;   
  }
};

export function open(section, question) {
  return { type: OPEN, payload: { section, question }};
};

export function close(section, question) {
  return { type: CLOSE, payload: { section, question }};
};

export function toggle(section, question) {
  return { type: TOGGLE, payload: { section, question }};
};