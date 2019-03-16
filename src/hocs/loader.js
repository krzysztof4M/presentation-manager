import { branch, renderComponent } from 'recompose';
import Loader from '../utils/Loader';

export default isLoading => branch(
  isLoading,
  renderComponent(Loader)
)
