import { css } from '@emotion/css';
import { EuiLoadingElastic } from '@elastic/eui';

const style = css`
  display: grid;
  place-items: center;
  height: 100dvh;
`;

export default () => {
  return (
    <div className={style}>
      <EuiLoadingElastic size="xl" />
    </div>
  );
};
