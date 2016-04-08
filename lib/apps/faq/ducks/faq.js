import faqs from '../data';
import assign from 'lodash/object/assign';

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
    const faqs = state.faqs.map(section => {
      const active = (section.index === payload.section && !section.active) ||
                     (section.index !== payload.section && section.active) ||
                     (payload.question && section.active);
      
      const questions = section.questions.map(question => {
        const active = (section.index === payload.section && question.index === payload.question && !question.active) ||
                       ((section.index !== payload.section || question.index !== payload.question) && question.active) ||
                       (!payload.question && question.active);

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