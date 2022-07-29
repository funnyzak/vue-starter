import AppView from './AppView.vue';

export const useRenderLayout = () => {
  const renderLayout = () => {
    return (
      <>
        <AppView></AppView>
      </>
    );
  };

  return {
    renderLayout
  };
};
