using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileGenerator
{
    class FileGenerator
    {
        public class Items
        {
            public List<Item> items { get; set; }
        }


        public static void WriteItemsToFile(List<Item> items, string filename)
        {
            if (!Directory.Exists(Path.GetDirectoryName(filename)))
            {
                Directory.CreateDirectory(Path.GetDirectoryName(filename));
            }
            File.WriteAllText(filename, JsonConvert.SerializeObject(items));
        }
        public static MappedBonus FindMappedBonus(Item.Bonus b)
        {

            if (b.type == 1)
            {
                return new MappedBonus() { MythicId = b.id, MythicType = b.type, MythicValue = b.value, Name = Enum.GetName(typeof(DaocEnums.Attributes), b.id), Type = Enum.GetName(typeof(DaocEnums.bonustype), b.type), Value = b.value.ToString() };
            }
            else if (b.type == 4)
            {
                return new MappedBonus() { MythicId = b.id, MythicType = b.type, MythicValue = b.value, Name = "Hits", Type = Enum.GetName(typeof(DaocEnums.bonustype), b.type), Value = b.value.ToString() };
            }
            else if (b.type == 5)
            {
                return new MappedBonus() { MythicId = b.id, MythicType = b.type, MythicValue = b.value, Name = Enum.GetName(typeof(DaocEnums.Resistances), b.id), Type = Enum.GetName(typeof(DaocEnums.bonustype), b.type), Value = b.value.ToString() };
            }
            else if (b.type == 22)
            {
                return new MappedBonus() { MythicId = b.id, MythicType = b.type, MythicValue = b.value, Name = "AF", Type = Enum.GetName(typeof(DaocEnums.bonustype), b.type), Value = b.value.ToString() };
            }
            return null;
        }
        static void Main(string[] args)
        {

            using (StreamReader file = File.OpenText(@"C:\Users\Matt\Downloads\static_objects.json"))
            {
                JsonSerializer serializer = new JsonSerializer();
                Items items = (Items)serializer.Deserialize(file, typeof(Items));

                foreach (Item item in items.items)
                {
                    foreach (var bonus in item.bonuses)
                    {
                        //item.mappedBonuses.Add(FindMappedBonus(bonus));
                    }
                    var categories = items.items.Select(x => x.category).Distinct().ToList();
                    var realms = items.items.Select(x => x.realm).Distinct().ToList();
                    var legs = items.items.Where(x => x.category == 2 && x.type_data.slot == 7);
                    var arms = items.items.Where(x => x.category == 2 && x.type_data.slot == 8);
                    var helms = items.items.Where(x => x.category == 2 && x.type_data.slot == 1);
                    var boots = items.items.Where(x => x.category == 2 && x.type_data.slot == 3);
                    var hands = items.items.Where(x => x.category == 2 && x.type_data.slot == 2);
                    var chests = items.items.Where(x => x.category == 2 && x.type_data.slot == 5);

                    foreach (var m in items.items)
                    {
                        try
                        {
                            if (m.bonuses != null)
                            {
                                var x = m.bonuses.Count;
                            }
                        }
                        catch (Exception)
                        {

                        }
                    }
                    //var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "items");
                    var path = Path.Combine(@"C:\Users\Matt\Documents\", "items");
                    var accessoryIcons = items.items.Where(x => x.category == 5 && x.flags.dyable == false && x.flags.emblemizable == false && x.requirements?.level_required > 45).Select(x => x.icon).Distinct().ToList();

                    var distinctBonuses = items.items.Where(x => x.bonuses != null).SelectMany(x => x.bonuses.Select(y => y.type).Distinct().ToList()).OrderBy(x => x).Distinct().ToList();

                    var jewelIcons = new List<int>() { 52, 262, 514, 115, 104, 117, 118, 119, 540, 110, 116, 113, 114, 542, 111, 112, 105, 106, 107, 496, 498, 524, 549, 550, 555, 595 };
                    var neckIcons = new List<int>() { 523, 101, 623, 509, 101, 500, 3807, 3808, 3809 };
                    var bracerIcons = new List<int>() { 598, 619, 622 };
                    var beltIcons = new List<int>() { 597 };
                    var ringIcons = new List<int>() { 103, 2524, 515 };

                    var mappedIcons = jewelIcons.Concat(neckIcons).Concat(bracerIcons).Concat(beltIcons).Concat(ringIcons);

                    var unMappedIcons = accessoryIcons.Where(x => !mappedIcons.Any(y => y == x)).OrderBy(x => x).ToList();
                    var jewels = items.items.Where(x => x.category == 5 && jewelIcons.Any(y => y == x.icon)).ToList();
                    WriteItemsToFile(jewels, Path.Combine(path, "AllJewels.json"));
                    var necks = items.items.Where(x => x.category == 5 && neckIcons.Any(y => y == x.icon)).ToList();
                    WriteItemsToFile(necks, Path.Combine(path, "AllNecks.json"));
                    var cloaks = items.items.Where(x => x.category == 5 && x.dye_type.HasValue).ToList();
                    WriteItemsToFile(cloaks, Path.Combine(path, "AllCloaks.json"));
                    var belts = items.items.Where(x => x.category == 5 && beltIcons.Any(y => y == x.icon)).ToList();
                    WriteItemsToFile(belts, Path.Combine(path, "AllBelts.json"));
                    var rings = items.items.Where(x => x.category == 5 && ringIcons.Any(y => y == x.icon)).ToList();
                    WriteItemsToFile(rings, Path.Combine(path, "AllRings.json"));
                    var bracers = items.items.Where(x => x.category == 5 && bracerIcons.Any(y => y == x.icon)).ToList();
                    WriteItemsToFile(bracers, Path.Combine(path, "AllBracers.json"));
                    var twohand = items.items.Where(x => x.category == 1 && x.type_data.two_handed == 1).ToList();
                    WriteItemsToFile(twohand, Path.Combine(path, "AllJTwoHand.json"));
                    var onehand = items.items.Where(x => x.category == 1 && x.type_data.two_handed == 0 && x.type_data.left_handed == 0).ToList();
                    WriteItemsToFile(onehand, Path.Combine(path, "AllOneHand.json"));
                    var lefthand = items.items.Where(x => x.category == 1 && x.type_data.two_handed == 0 && x.type_data.left_handed == 1).ToList();
                    WriteItemsToFile(lefthand, Path.Combine(path, "AllLefthand.json"));
                    var ranged = items.items.Where(x => x.category == 1 && x.type_data.range.HasValue).ToList();
                    WriteItemsToFile(ranged, Path.Combine(path, "AllRanged.json"));

                }
            }
        }
    }
}
