import {
  listenTo,
  createRef
} from './helpers';

export default function createOnChildRemoved(controller) {
  return (path, signal, options) => {
    listenTo(
      createRef(path, options),
      path,
      'child_removed',
      signal,
      (data) => {
        controller.getSignals(signal)({
          key: data.key,
          ...options.payload
        });
      }
    );
  };
}
