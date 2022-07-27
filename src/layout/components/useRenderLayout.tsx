import AppView from './AppView.vue';

export const useRenderLayout = () => {
  const renderLayout = () => {
    return (
      <>
        <div class="absolute left-0 w-full flex">
          <AppView></AppView>
        </div>
      </>
    );
  };

  return {
    renderLayout
  };
};
