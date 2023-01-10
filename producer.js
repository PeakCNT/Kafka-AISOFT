const kafka = require("kafka-node");

const client = new kafka.KafkaClient();
const producer = new kafka.Producer(client);

producer.on("ready", () => {
  console.log("Producer is ready");

  setInterval(() => {
    const message = {
      value: `Hello Kafka! ${new Date().toISOString()}`,
    };

    producer.send([{ topic: "test", messages: [message] }], (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Message sent");
      }
    });
  }, 1000);
});

producer.on("error", (error) => {
  console.error(error);
});
