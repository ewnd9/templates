export const command = {
  command: 'echo [word]',
  desc: 'simply echo',
  async handler({word}) {
    console.log(word)
  }
};
